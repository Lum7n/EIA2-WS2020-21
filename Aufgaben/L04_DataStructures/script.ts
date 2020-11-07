namespace Hexenkessel_L04 {

    window.addEventListener("load", function (): void {
        
        init();

        window.setTimeout(setMain, 1200);

    });

    function setMain(): void {
        var w: HTMLElement = <HTMLElement>document.getElementById("startWindow");
        w.style.display = "none";
        var b: HTMLElement = <HTMLElement>document.body;
        b.style.backgroundColor = "#ce9f73";
        b.style.overflowY = "auto";
        var m: HTMLElement = <HTMLElement>document.getElementById("main");
        m.style.display = "inherit";
    }

    function init(): void {
        console.log("love");
    }









}