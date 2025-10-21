var container = document.querySelector("#container");
var btn = document.querySelector("#btn");
var header = document.querySelector("h1");
if (!container || !btn || !header) {
    throw new Error("Missing DOM elements");
}
// ---- Starting grid size ----
var choice = 16;
// ---- Grid creator ----
createGrid();
function createGrid() {
    if (choice < 2 || choice > 100)
        return;
    var squaresToRemove = document.querySelectorAll(".square");
    if (squaresToRemove.length) {
        squaresToRemove.forEach(function (squareToRemove) {
            squareToRemove.remove();
        });
    }
    var grid = choice * choice;
    document.documentElement.style.setProperty("--grid-size", choice.toString());
    for (var i = 0; i < grid; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        container === null || container === void 0 ? void 0 : container.appendChild(square);
    }
}
// ---- Hover color changer ----
colors();
function colors() {
    var changeSquare = document.querySelectorAll(".square");
    changeSquare.forEach(function (changeSquare) {
        var lightNumber = 1;
        changeSquare.addEventListener("mouseover", function (e) {
            changeSquare.style.setProperty("background", randomColor());
            changeSquare.style.setProperty("filter", "brightness(".concat(lightNumber, ")"));
            changeLight();
            function changeLight() {
                if (lightNumber <= 0)
                    return;
                lightNumber = Number((lightNumber - 0.1).toFixed(1));
            }
        });
    });
}
function randomColor() {
    var rando = function () { return Math.floor(Math.random() * 255) + 1; };
    return "rgb(".concat(rando(), ",").concat(rando(), ",").concat(rando(), ")");
}
// ---- Grid resizing button ----
btn.addEventListener("click", function () {
    var answer = prompt("Choose a grid size from 2 - 100");
    choice = Number(answer);
    createGrid();
    colors();
});
// ---- Header colorize and bounce features ----
var headerLength = header.innerText.length;
wrapHeaderLetters();
function wrapHeaderLetters() {
    var _a;
    if (headerLength && header) {
        for (var i = 0; i < headerLength; i++) {
            var span = document.createElement("span");
            span.innerText = header.innerText[i];
            header.appendChild(span);
        }
        (_a = header.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
var newSpans = document.querySelectorAll("h1 > span");
setInterval(function () {
    var index = randomNumber();
    if (index == null)
        return;
    var spanPicker = newSpans[index];
    spanPicker.style.color = "".concat(randomColor());
    spanPicker.setAttribute("class", "bounce");
}, 750);
setInterval(function () {
    newSpans.forEach(function (span) {
        if (span.classList.value === "bounce") {
            span.removeAttribute("class");
        }
    });
}, 900);
function randomNumber() {
    return headerLength ? Math.floor(Math.random() * headerLength) : undefined;
}
