const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const header = document.querySelector("h1");
if (!container || !btn || !header) {
    throw new Error("Missing DOM elements");
}
let choice = 16;
createGrid();
function createGrid() {
    if (choice < 2 || choice > 100)
        return;
    const squaresToRemove = document.querySelectorAll(".square");
    if (squaresToRemove.length) {
        squaresToRemove.forEach((squareToRemove) => {
            squareToRemove.remove();
        });
    }
    let grid = choice * choice;
    document.documentElement.style.setProperty("--grid-size", choice.toString());
    for (let i = 0; i < grid; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container?.appendChild(square);
    }
}
colors();
function colors() {
    const changeSquare = document.querySelectorAll(".square");
    changeSquare.forEach((changeSquare) => {
        let lightNumber = 1;
        changeSquare.addEventListener("mouseover", () => {
            changeSquare.style.setProperty("background", randomColor());
            changeSquare.style.setProperty("filter", `brightness(${lightNumber})`);
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
    const rando = () => Math.floor(Math.random() * 255) + 1;
    return `rgb(${rando()},${rando()},${rando()})`;
}
btn.addEventListener("click", () => {
    const answer = prompt("Choose a grid size from 2 - 100");
    choice = Number(answer);
    createGrid();
    colors();
});
const headerLength = header.innerText.length;
wrapHeaderLetters();
function wrapHeaderLetters() {
    if (headerLength && header) {
        for (let i = 0; i < headerLength; i++) {
            const span = document.createElement("span");
            span.innerText = header.innerText.charAt(i);
            header.appendChild(span);
        }
        header.firstChild?.remove();
    }
}
const newSpans = document.querySelectorAll("h1 > span");
setInterval(() => {
    const index = randomNumber();
    if (index == null)
        return;
    const spanPicker = newSpans[index];
    if (spanPicker !== undefined) {
        spanPicker.style.color = `${randomColor()}`;
        spanPicker.setAttribute("class", "bounce");
    }
}, 750);
setInterval(() => {
    newSpans.forEach((span) => {
        if (span.classList.value === "bounce") {
            span.removeAttribute("class");
        }
    });
}, 900);
function randomNumber() {
    return headerLength ? Math.floor(Math.random() * headerLength) : undefined;
}
export {};
//# sourceMappingURL=index.js.map