"use strict";
var miniUNO;
(function (miniUNO) {
    let cardStack = []; // ungemischt
    let playerCards = []; // Array Spielerkarten
    let computerCards = []; // Array Gegnerkarten
    let discardStackCards = []; // Array für Spielstapel
    let currentCard; // aktuelle Karte auf Ablagestapel
    // let currentPlayer: boolean; // zeigt, ob Gegener oder Spieler an der Reihe ist
    // let alreadyTookCard: boolean = false; // zeigt an, ob schon eine Karte aufgenommen wurde
    window.addEventListener("load", function () {
        let start = document.getElementById("startBtn");
        start.addEventListener("click", createCards);
        start.addEventListener("click", setMain);
    });
    function setMain() {
        var w = document.getElementById("startWindow");
        w.style.display = "none";
        var m = document.getElementById("main");
        m.style.display = "contents";
    }
    function createCards() {
        clearAll();
        generateCardStack();
        shuffle(cardStack);
        let getInput = document.getElementById("startingCards");
        let numberOfCards = parseFloat(getInput.value);
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
    function generateCardStack() {
        for (let i = 0; i < 4; i++) {
            let color;
            if (i == 0) {
                color = "black";
            }
            else if (i == 1) {
                color = "blue";
            }
            else if (i == 2) {
                color = "red";
            }
            else if (i == 3) {
                color = "yellow";
            }
            for (let j = 0; j <= 9; j++) {
                let newCard = {
                    cardColor: color,
                    cardValency: j
                };
                cardStack.push(newCard);
            }
        }
    }
    // basierend auf Fisher-Yates (aka Knuth) Shuffle
    function shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
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
    function clearAll() {
        clearHtml("player");
        clearHtml("opponent");
        clearHtml("active");
        clearHtml("stack");
        playerCards = [];
        computerCards = [];
        cardStack = [];
        discardStackCards = [];
        let currentCard;
        currentPlayer = true;
        alreadyTookCard = false;
    }
    function clearHtml(sectionID) {
        let myNode = document.getElementById(sectionID);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
})(miniUNO || (miniUNO = {}));
//# sourceMappingURL=script.js.map