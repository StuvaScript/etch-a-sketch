let choice;

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
  document.documentElement.style.setProperty("--grid-size", choice);
  for (let i = 0; i < grid; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

// ---- Hover color changer ----

colors();
function colors() {
  let changeSquare = document.querySelectorAll(".square");
  changeSquare.forEach((changeSquare) => {
    let lightNumber = 1;

    changeSquare.addEventListener("mouseover", () => {
      changeSquare.style.setProperty("background", randomColor());
      changeSquare.style.setProperty("filter", `brightness(${lightNumber})`);
      changeLight();
      function changeLight() {
        if (lightNumber <= 0) return;
        lightNumber = (lightNumber - 0.1).toFixed(1);
      }
    });
  });
}

function randomColor() {
  let r = Math.floor(Math.random() * 256) + 1;
  let g = Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  return `rgb(${r},${g},${b})`;
}

// ---- Grid resizing button ----

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let answer = prompt("Choose a grid size from 2 - 100");
  choice = parseInt(answer);
  createGrid();
  colors();
});

// ---- Header colorize and bounce features ----

const header = document.querySelector("h1");
const headerLength = header.innerText.length;
wrapHeaderLetters();
const newSpans = document.querySelectorAll("h1 > span");

setInterval(() => {
  const spanPicker = newSpans[randomNumber()];
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

function wrapHeaderLetters() {
  for (let i = 0; i < headerLength; i++) {
    let span = document.createElement("span");
    span.innerText = header.innerText[i];
    header.appendChild(span);
  }
  header.firstChild.remove();
}

function randomNumber() {
  return Math.floor(Math.random() * headerLength);
}
