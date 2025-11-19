const container: HTMLDivElement | null = document.querySelector("#container");
const btn: HTMLButtonElement | null = document.querySelector("#btn");
const header: HTMLHeadingElement | null = document.querySelector("h1");

if (!container || !btn || !header) {
  throw new Error("Missing DOM elements");
}

// ---- Starting grid size ----
let choice: number = 16;

// ---- Grid creator ----

createGrid();
function createGrid(): void {
  if (choice < 2 || choice > 100) return;

  const squaresToRemove: Readonly<NodeListOf<HTMLDivElement>> =
    document.querySelectorAll(".square");
  if (squaresToRemove.length) {
    squaresToRemove.forEach((squareToRemove) => {
      squareToRemove.remove();
    });
  }
  let grid: number = choice * choice;
  document.documentElement.style.setProperty("--grid-size", choice.toString());
  for (let i = 0; i < grid; i++) {
    const square: HTMLDivElement = document.createElement("div");
    square.classList.add("square");
    container?.appendChild(square);
  }
}

// ---- Hover color changer ----

colors();
function colors(): void {
  const changeSquare: Readonly<NodeListOf<HTMLDivElement>> =
    document.querySelectorAll(".square");
  changeSquare.forEach((changeSquare) => {
    let lightNumber: number = 1;

    changeSquare.addEventListener("mouseover", (): void => {
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

type RGB = `rgb(${number},${number},${number})`;

function randomColor(): RGB {
  const rando = (): number => Math.floor(Math.random() * 255) + 1;

  return `rgb(${rando()},${rando()},${rando()})`;
}

// ---- Grid resizing button ----

btn.addEventListener("click", (): void => {
  const answer: string | null = prompt("Choose a grid size from 2 - 100");
  if (!answer) return;
  choice = Number(answer);
  createGrid();
  colors();
});

// ---- Header colorize and bounce features ----

const headerLength: number = header.innerText.length;
wrapHeaderLetters();

function wrapHeaderLetters(): void {
  if (headerLength && header) {
    for (let i = 0; i < headerLength; i++) {
      const span: HTMLSpanElement = document.createElement("span");
      span.innerText = header.innerText.charAt(i);
      header.appendChild(span);
    }
    header.firstChild?.remove();
  }
}

const newSpans: NodeListOf<HTMLSpanElement> | undefined =
  document.querySelectorAll("h1 > span");

setInterval((): void => {
  const index: number | undefined = randomNumber();
  if (!index) return;
  const spanPicker: HTMLSpanElement | undefined = newSpans[index];
  if (spanPicker !== undefined) {
    spanPicker.style.color = `${randomColor()}`;
    spanPicker.setAttribute("class", "bounce");
  }
}, 750);

setInterval((): void => {
  newSpans.forEach((span) => {
    if (span.classList.value === "bounce") {
      span.removeAttribute("class");
    }
  });
}, 900);

function randomNumber(): number | undefined {
  return headerLength ? Math.floor(Math.random() * headerLength) : undefined;
}
