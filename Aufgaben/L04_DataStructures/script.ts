namespace Hexenkessel_L04 {

    window.addEventListener("load", function (): void {

        init();

        window.setTimeout(setMain, 1200);

    });




    function init(): void {
        console.log("no_love");

        let potionName: HTMLElement = <HTMLElement>document.getElementById("name");
        potionName.addEventListener("input", displayPotion);

        let potionDescription: HTMLElement = <HTMLElement>document.getElementById("description");
        potionDescription.addEventListener("input", displayPotion);

        let potionRisks: HTMLElement = <HTMLElement>document.getElementById("risks");
        potionRisks.addEventListener("input", displayPotion);

        console.log("love");

    }

    function setMain(): void {
        var w: HTMLElement = <HTMLElement>document.getElementById("startWindow");
        w.style.display = "none";
        var b: HTMLElement = <HTMLElement>document.body;
        b.style.backgroundColor = "#ce9f73";
        b.style.overflowY = "auto";
        var m: HTMLElement = <HTMLElement>document.getElementById("main");
        m.style.display = "inherit";
    }

    function displayPotion(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name == "name") {
            let potion: string = target.value;
            console.log(potion);
            let name: HTMLElement = <HTMLElement>document.getElementById("potionName");
            name.innerHTML = "Name: " + potion;

        } else if (target.name == "description") {
            let potionDes: string = target.value;
            let description: HTMLElement = <HTMLElement>document.getElementById("potionDescription");
            description.innerHTML = "Beschreibung: " + potionDes;

        } else if (target.name == "risks") {
            let potionRisk: string = target.value;
            let risks: HTMLElement = <HTMLElement>document.getElementById("potionRisks");
            risks.innerHTML = "Risiken und Nebenwirkungen: " + potionRisk;

        } else {
            console.log("noInput");
        }
    }




}