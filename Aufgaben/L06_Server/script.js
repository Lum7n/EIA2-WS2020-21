"use strict";
var Hexenkessel_L06;
(function (Hexenkessel_L06) {
    let form;
    let url = "https://lum7n.herokuapp.com";
    window.addEventListener("load", init);
    async function init(_event) {
        window.setTimeout(setMain, 1200); //1200
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", sendOrder);
        let response = await fetch("data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        Hexenkessel_L06.generateContent(data);
        let potionName = document.getElementById("name");
        potionName.addEventListener("input", displayPotion);
        let potionDescription = document.getElementById("description");
        potionDescription.addEventListener("input", displayPotion);
        let potionRisks = document.getElementById("risks");
        potionRisks.addEventListener("input", displayPotion);
        let range1 = document.getElementById("range1");
        range1.addEventListener("input", displayAmount);
        let range2 = document.getElementById("range2");
        range2.addEventListener("input", displayAmount);
        let range3 = document.getElementById("range3");
        range3.addEventListener("input", displayAmount);
        let range4 = document.getElementById("range4");
        range4.addEventListener("input", displayAmount);
        let stepper = document.querySelector("input#stepper");
        stepper.addEventListener("input", displayTemp);
    }
    function setMain() {
        var w = document.getElementById("startWindow");
        w.style.display = "none";
        var b = document.body;
        b.style.backgroundColor = "#ce9f73";
        b.style.overflowY = "auto";
        var m = document.getElementById("main");
        m.style.display = "inherit";
    }
    async function sendOrder(_event) {
        console.log("send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function displayPotion(_event) {
        let target = _event.target;
        if (target.name == "name") {
            let potion = target.value;
            console.log(potion);
            let name = document.getElementById("potionName");
            name.innerHTML = "Name: " + potion;
        }
        else if (target.name == "description") {
            let potionDes = target.value;
            let description = document.getElementById("potionDescription");
            description.innerHTML = "Beschreibung: " + potionDes;
        }
        else if (target.name == "risks") {
            let potionRisk = target.value;
            let risks = document.getElementById("potionRisks");
            risks.innerHTML = "Risiken und Nebenwirkungen: " + potionRisk;
        }
        else {
            console.log("noInput");
        }
    }
    function displayAmount(_event) {
        let target = _event.target;
        // Amount response
        if (target.name == "range1") {
            let ouput = document.querySelector("output#range1out");
            ouput.value = target.value + " Stk.";
        }
        else if (target.name == "range2") {
            let ouput = document.querySelector("output#range2out");
            ouput.value = target.value + " Stk.";
        }
        else if (target.name == "range3") {
            let ouput = document.querySelector("output#range3out");
            ouput.value = target.value + " ml";
        }
        else if (target.name == "range4") {
            let ouput = document.querySelector("output#range4out");
            ouput.value = target.value + " Stk.";
        }
    }
    function displayTemp(_event) {
        let progress = document.querySelector("progress");
        let temperature = _event.target.value;
        progress.value = parseFloat(temperature);
    }
})(Hexenkessel_L06 || (Hexenkessel_L06 = {}));
//# sourceMappingURL=script.js.map