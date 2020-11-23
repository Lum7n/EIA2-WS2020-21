"use strict";
var Hexenkessel_L06;
(function (Hexenkessel_L06) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "ingredients":
                    group = createCheckbox(items, category);
                    break;
                default:
                    break;
            }
            let span = document.querySelector("span#" + category);
            if (span && group) // wenn span und group definiert sind, bezogen auf null
                span.appendChild(group);
        }
    }
    Hexenkessel_L06.generateContent = generateContent;
    function createCheckbox(_items, _category) {
        let group = document.createElement("span");
        let checkGr1 = document.createElement("span");
        checkGr1.id = "checkGr1";
        let checkGr2 = document.createElement("span");
        checkGr2.id = "checkGr2";
        let checkGr3 = document.createElement("span");
        checkGr3.id = "checkGr3";
        let checkGr4 = document.createElement("span");
        checkGr4.id = "checkGr4";
        for (let item of _items) {
            switch (item.id) {
                case "check1.1":
                case "check1.2":
                case "check1.3":
                    let checkbox1 = document.createElement("input");
                    checkbox1.type = item.type;
                    checkbox1.name = _category;
                    checkbox1.value = item.title;
                    checkbox1.id = item.id;
                    let label1 = document.createElement("label");
                    label1.htmlFor = item.id;
                    label1.textContent = item.title;
                    checkGr1.appendChild(checkbox1);
                    checkGr1.appendChild(label1);
                    break;
                case "check2":
                    let checkbox2 = document.createElement("input");
                    checkbox2.type = item.type;
                    checkbox2.name = _category;
                    checkbox2.value = item.title;
                    checkbox2.id = item.id;
                    let label2 = document.createElement("label");
                    label2.htmlFor = item.id;
                    label2.textContent = item.title;
                    checkGr2.appendChild(checkbox2);
                    checkGr2.appendChild(label2);
                    break;
                case "check3.1":
                case "check3.2":
                case "check3.3":
                    let checkbox3 = document.createElement("input");
                    checkbox3.type = item.type;
                    checkbox3.name = _category;
                    checkbox3.value = item.title;
                    checkbox3.id = item.id;
                    let label3 = document.createElement("label");
                    label3.htmlFor = item.id;
                    label3.textContent = item.title;
                    checkGr3.appendChild(checkbox3);
                    checkGr3.appendChild(label3);
                    break;
                case "check4.1":
                case "check4.2":
                    let checkbox4 = document.createElement("input");
                    checkbox4.type = item.type;
                    checkbox4.name = _category;
                    checkbox4.value = item.title;
                    checkbox4.id = item.id;
                    let label4 = document.createElement("label");
                    label4.htmlFor = item.id;
                    label4.textContent = item.title;
                    checkGr4.appendChild(checkbox4);
                    checkGr4.appendChild(label4);
                    break;
                default:
                    break;
            }
        }
        let breakTag1 = document.createElement("br");
        let breakTag2 = document.createElement("br");
        let breakTag3 = document.createElement("br");
        group.appendChild(checkGr1);
        group.appendChild(breakTag1);
        group.appendChild(checkGr2);
        group.appendChild(breakTag2);
        group.appendChild(checkGr3);
        group.appendChild(breakTag3);
        group.appendChild(checkGr4);
        return group;
    }
})(Hexenkessel_L06 || (Hexenkessel_L06 = {}));
//# sourceMappingURL=generateContent.js.map