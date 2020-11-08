"use strict";
var Hexenkessel_L04;
(function (Hexenkessel_L04) {
    window.addEventListener("load", function () {
        init();
        window.setTimeout(setMain, 1200);
    });
    function init() {
        console.log("no_love");
        let potionName = document.getElementById("name");
        potionName.addEventListener("input", displayPotion);
        let potionDescription = document.getElementById("description");
        potionDescription.addEventListener("input", displayPotion);
        let potionRisks = document.getElementById("risks");
        potionRisks.addEventListener("input", displayPotion);
        console.log("love");
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
})(Hexenkessel_L04 || (Hexenkessel_L04 = {}));
//# sourceMappingURL=script.js.map