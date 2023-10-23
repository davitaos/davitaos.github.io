var Data = {CharWidth: 10,
            CharHeight: 20,
            HorizontalMax: 80,
            VerticalMax: 30,
            Left: 0,
            Top: 0,
            ScreenWidth: 800,
            ScreenHeight: 600,
            ForeColor: "white",
            BackColor: "black"};
var SymbolsTop = [];
var SymbolsLeft = [];
var AllowedSymbols = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "&#9473;", "&#9475;", "&#9487;", "&#9491;", "&#9495;", "&#9499;", "&#9507;", "&#9515;", "&#9523;", "&#9531;", "&#9547;"];
window.onload = function() {
    Main();
}
function Main() {
    OSWindow();
}
function OSWindow() {
    ChangeBackColor("red");
    ChangeForeColor("black");
    SetCursor(Data.HorizontalMax / 2 - 16, 0);
    WriteAll("Create login                    ");
    ChangeBackColor("rgb(208, 0, 0)");
    SetCursor(Data.HorizontalMax / 2 - 16, 1);
    WriteAll("User:                           ");
    SetCursor(Data.HorizontalMax / 2 - 16, 2);
    WriteAll("Password:                       ");
}
function Write(Text) {
    if (typeof Text != "string") {
        console.error("Bad Write Function.");
        return;
    }
    var i = 0;
    var IsAllowedSymbol = false;
    while (AllowedSymbols[i] != undefined) {
        if (Text == AllowedSymbols[i]) {
            IsAllowedSymbol = true;
        }
        i++;
    }
    if (IsAllowedSymbol == false) {
        console.error("Bad Write Function.");
        return;
    }
    if (Data.Left == Data.HorizontalMax) {
        Data.Top++;
        Data.Left = 0;
    }
    if (Data.Top == Data.VerticalMax) {
        Data.Left = 0;
        Data.Top = 0;
    }
    var j = 0;
    while (SymbolsTop[j] != undefined && SymbolsLeft[j] != undefined) {
        if (Data.Left == SymbolsLeft[j] && Data.Top == SymbolsTop[j]) {
            document.getElementsByClassName("Symbol")[j].remove();
            SymbolsLeft.splice(j, 1);
            SymbolsTop.splice(j, 1);
        }
        j++;
    }
    var Elem = document.createElement("div");
    Elem.style.position = "absolute";
    Elem.style.left = Data.CharWidth * Data.Left + "px";
    Elem.style.top = Data.CharHeight * Data.Top + "px";
    Elem.style.width = Data.CharWidth + "px";
    Elem.style.height = Data.CharHeight + "px";
    Elem.style.background = Data.BackColor;
    Elem.style.color = Data.ForeColor;
    Elem.className = "Symbol";
    Elem.innerHTML = Text;
    document.getElementById("Screen").appendChild(Elem);
    SymbolsTop.push(Data.Top);
    SymbolsLeft.push(Data.Left);
    Data.Left++;
}
function WriteAll(Text) {
    if (typeof Text != "string") {
        console.error("Bad WriteAll Function.");
        return;
    }
    var i = 0;
    while (i != Text.length) {
        if (Data.Left == Data.HorizontalMax) {
            Data.Top++;
            Data.Left = 0;
        }
        if (Data.Top == Data.VerticalMax) {
            Data.Left = 0;
            Data.Top = 0;
        }
        var j = 0;
        while (SymbolsTop[j] != undefined && SymbolsLeft[j] != undefined) {
            if (Data.Left == SymbolsLeft[j] && Data.Top == SymbolsTop[j]) {
                document.getElementsByClassName("Symbol")[j].remove();
                SymbolsLeft.splice(j, 1);
                SymbolsTop.splice(j, 1);
            }
            j++;
        }
        var Elem = document.createElement("div");
        Elem.style.position = "absolute";
        Elem.style.left = Data.CharWidth * Data.Left + "px";
        Elem.style.top = Data.CharHeight * Data.Top + "px";
        Elem.style.width = Data.CharWidth + "px";
        Elem.style.height = Data.CharHeight + "px";
        Elem.style.background = Data.BackColor;
        Elem.style.color = Data.ForeColor;
        Elem.className = "Symbol";
        Elem.innerHTML = Text.substring(i, i + 1);
        document.getElementById("Screen").appendChild(Elem);
        SymbolsTop.push(Data.Top);
        SymbolsLeft.push(Data.Left);
        i++;
        Data.Left++;
    }
}
function SetCursor(Left, Top) {
    if (typeof Left != "number" || typeof Top != "number" || Left >= Data.HorizontalMax || Top >= Data.VerticalMax) {
        console.error("Bad SetCursor function.");
        return;
    }
    Data.Left = Left;
    Data.Top = Top;
}
function SetCursorLeft(Left) {
    if (typeof Left != "number") {
        console.error("Bad SetCursorLeft function.");
        return;
    }
    Data.Left = Left;
}
function SetCursorTop(Top) {
    if (typeof Top != "number") {
        console.error("Bad SetCursorTop function.");
        return;
    }
    Data.Top = Top;
}
function ChangeForeColor(Color) {
    if (typeof Color == "string") {
        console.error("Bad ChangeForeColor function.");
    }
    Data.ForeColor = Color;
}
function ChangeBackColor(Color) {
    if (typeof Color != "string") {
        console.error("Bad ChangeBackColor function.");
    }
    Data.BackColor = Color;
}
function ChangeForeColor(Color) {
    if (typeof Color != "string") {
        console.error("Bad ChangeForeColor function.");
    }
    Data.ForeColor = Color;
}
function Clear() {
    var i = 0;
    var Symbol = document.getElementsByClassName("Symbol")
    while (Symbol[i] != null) {
        Symbol[i].remove();
        i++;
    }
}