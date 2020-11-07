"use strict";
var Hexenkessel;
(function (Hexenkessel) {
    window.addEventListener("load", function () {
        init();
        window.setTimeout(setMain, 1200);
    });
    function setMain() {
        var w = document.getElementById("startWindow");
        w.style.display = "none";
        var b = document.body;
        b.style.backgroundColor = "#ce9f73";
        b.style.overflowY = "auto";
        var m = document.getElementById("main");
        m.style.display = "inherit";
    }
    function init() {
        console.log("love");
    }
})(Hexenkessel || (Hexenkessel = {}));
//# sourceMappingURL=script.js.map