namespace Hexenkessel_L05 {

    let form: HTMLFormElement;

    window.addEventListener("load", init);





    async function init(_event: Event): Promise<void> {

        window.setTimeout(setMain, 1200); //1200

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
        submit.addEventListener("click", sendOrder);

        // let response: Response = await fetch("data.json");
        // let offer: string = await response.text();
        // let data: Data = JSON.parse(offer);

        let potionName: HTMLElement = <HTMLElement>document.getElementById("name");
        potionName.addEventListener("input", displayPotion);

        let potionDescription: HTMLElement = <HTMLElement>document.getElementById("description");
        potionDescription.addEventListener("input", displayPotion);

        let potionRisks: HTMLElement = <HTMLElement>document.getElementById("risks");
        potionRisks.addEventListener("input", displayPotion);

        let range1: HTMLElement = <HTMLElement>document.getElementById("range1");
        range1.addEventListener("input", displayAmount);
        let range2: HTMLElement = <HTMLElement>document.getElementById("range2");
        range2.addEventListener("input", displayAmount);
        let range3: HTMLElement = <HTMLElement>document.getElementById("range3");
        range3.addEventListener("input", displayAmount);
        let range4: HTMLElement = <HTMLElement>document.getElementById("range4");
        range4.addEventListener("input", displayAmount);

        let stepper: HTMLInputElement = <HTMLInputElement>document.querySelector("input#stepper");
        stepper.addEventListener("input", displayTemp);


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

    async function sendOrder(_event: Event): Promise<void> {
        console.log("send order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("Index.html?" + query.toString());
        alert("Order Sent!");
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

    function displayAmount(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
    
        // Amount response
        if (target.name == "range1") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#range1out");
            ouput.value = target.value + " Stk.";
        } else if (target.name == "range2") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#range2out");
            ouput.value = target.value + " Stk.";
        } else if (target.name == "range3") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#range3out");
            ouput.value = target.value + " ml";
        } else if (target.name == "range4") {
            let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output#range4out");
            ouput.value = target.value + " Stk.";
        }
    }

    function displayTemp(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let temperature: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(temperature);
    }


}