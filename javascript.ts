let choice: number;
const container: HTMLDivElement | null = document.querySelector("#container");

// ---- Starting grid size ----

baseArea();
function baseArea() {
  choice = 16;
}

// ---- Grid creator ----

createGrid();
function createGrid() {
  if (!(choice > 2 || choice < 100) || choice < 2 || choice > 100) return;
  if (document.querySelector(".square")) {
    let beGone = document.querySelectorAll(".square");
    beGone.forEach((beGone) => {
      beGone.remove();
    });
  }
  let grid = choice * choice;
  document.documentElement.style.setProperty("--grid-size", choice.toString());
  for (let i = 0; i < grid; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container?.appendChild(square);
  }
}

// ---- Hover color changer ----

colors();
function colors() {
  let changeSquare: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".square");
  changeSquare.forEach((changeSquare: HTMLDivElement) => {
    let lightNumber: number = 1;

    changeSquare.addEventListener("mouseover", () => {
      changeSquare.style.setProperty("background", randomColor());
      changeSquare.style.setProperty("filter", `brightness(${lightNumber})`);
      changeLight();
      function changeLight(): void {
        if (lightNumber <= 0) return;
        lightNumber = Number((lightNumber - 0.1).toFixed(1));
      }
    });
  });
}

function randomColor(): string {
  let r = Math.floor(Math.random() * 256) + 1;
  let g = Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  return `rgb(${r},${g},${b})`;
}

// ---- Grid resizing button ----

let btn: HTMLButtonElement | null = document.querySelector("#btn");
btn?.addEventListener("click", () => {
  let answer: string | null = prompt("Choose a grid size from 2 - 100");
  choice = Number(answer);
  createGrid();
  colors();
});

// ---- Header colorize and bounce features ----

const header: HTMLHeadingElement | null = document.querySelector("h1");
const headerLength: number | undefined = header?.innerText.length;
console.log("headerLength:", headerLength);
wrapHeaderLetters();

function wrapHeaderLetters(): void {
  if (headerLength && header) {
    for (let i = 0; i < headerLength; i++) {
      let span: HTMLSpanElement = document.createElement("span");
      span.innerText = header.innerText[i];

      header?.appendChild(span);
    }
    header?.firstChild?.remove();
  }
}

const newSpans: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll<HTMLSpanElement>("h1 > span");

setInterval(() => {
  const index = randomNumber();
  if (index == null) return;
  const spanPicker: HTMLSpanElement = newSpans[index];
  spanPicker.style.color = `${randomColor()}`;
  spanPicker.setAttribute("class", "bounce");
}, 750);

setInterval(() => {
  newSpans.forEach((span) => {
    if (span.classList.value === "bounce") {
      span.removeAttribute("class");
    }
  });
}, 900);

function randomNumber(): number | undefined {
  if (headerLength) return Math.floor(Math.random() * headerLength);
}
