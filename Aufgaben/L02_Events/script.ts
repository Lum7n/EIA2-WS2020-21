namespace miniUNO {

    // Spielkarten Interface:
    interface Card {
        cardColor: string;      // Farbe
        cardValency: number;    // Wertigkeit
        //boolean ausgeteilt oder nicht
    }

    let cardStack: Card[] = []; // ungemischt
    let playerCards: Card[] = []; // Array Spielerkarten
    let computerCards: Card[] = []; // Array Gegnerkarten
    let discardStackCards: Card[] = []; // Array für Spielstapel

    let currentCard: Card; // aktuelle Karte auf Ablagestapel

    // let currentPlayer: boolean; // zeigt, ob Gegener oder Spieler an der Reihe ist
    // let alreadyTookCard: boolean = false; // zeigt an, ob schon eine Karte aufgenommen wurde



    window.addEventListener("load", function (): void {

        let start: HTMLElement = <HTMLElement>document.getElementById("startBtn");
        start.addEventListener("click", createCards);
        start.addEventListener("click", setMain);
    });

    function setMain(): void {
        var w: HTMLElement = <HTMLElement>document.getElementById("startWindow");
        w.style.display = "none";
        var m: HTMLElement = <HTMLElement>document.getElementById("main");
        m.style.display = "contents";
    }

    function createCards(): void {

        clearAll();
        generateCardStack();
        shuffle(cardStack);

        let getInput: HTMLInputElement = <HTMLInputElement>document.getElementById("startingCards");
        let numberOfCards: number = parseFloat(getInput.value);
        while (numberOfCards) {
            playerCards.push(cardStack[0]);
            cardStack.splice(0, 1);
            computerCards.push(cardStack[0]);
            cardStack.splice(0, 1);
            numberOfCards -= 1;
        }

        console.log(numberOfCards);
        console.log(cardStack);
        console.log(playerCards);
        console.log(computerCards);

    }

    function generateCardStack(): void {
        for (let i: number = 0; i < 4; i++) {
            let color: string;
            if (i == 0) { color = "black"; }
            else if (i == 1) { color = "blue"; }
            else if (i == 2) { color = "red"; }
            else if (i == 3) { color = "yellow"; }
            for (let j: number = 0; j <= 9; j++) {
                let newCard: Card = {
                    cardColor: color,
                    cardValency: j
                };
                cardStack.push(newCard);
            }
        }
    }

    // basierend auf Fisher-Yates (aka Knuth) Shuffle
    function shuffle (array: Card[]): Card[] {
        let currentIndex: number = array.length;
        let temporaryValue: any;
        let randomIndex: number;

        // Solange noch Elemente vorhanden sind ...
        while (0 !== currentIndex) {

            // ein vorhandenes Element auswählen und ...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // mit dem Aktuellen tauschen.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function clearAll(): void {
        clearHtml("player");
        clearHtml("opponent");
        clearHtml("active");
        clearHtml("stack");
        playerCards = [];
        computerCards = [];
        cardStack = [];
        discardStackCards = [];
        let currentCard: Card;
        currentPlayer = true;
        alreadyTookCard = false;
    }

    function clearHtml(sectionID: string): void {
        let myNode: HTMLElement = <HTMLElement>document.getElementById(sectionID);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}