// const container = document.querySelector("#container");
// const btn = document.querySelector("#btn");
// const header = document.querySelector("h1");

// if (!container || !btn || !header) {
//   throw new Error("Missing DOM elements");
// }

// // ---- Starting grid size ----
// let choice = 16;

// // ---- Grid creator ----

// createGrid();
// function createGrid(): void {
//   if (choice < 2 || choice > 100) return;

//   const squaresToRemove: Readonly<NodeListOf<HTMLDivElement>> =
//     document.querySelectorAll(".square");
//   if (squaresToRemove.length) {
//     squaresToRemove.forEach((squareToRemove) => {
//       squareToRemove.remove();
//     });
//   }
//   let grid = choice * choice;
//   document.documentElement.style.setProperty("--grid-size", choice.toString());
//   for (let i = 0; i < grid; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     container?.appendChild(square);
//   }
// }

// // ---- Hover color changer ----

// colors();
// function colors(): void {
//   const changeSquare: Readonly<NodeListOf<HTMLDivElement>> =
//     document.querySelectorAll(".square");
//   changeSquare.forEach((changeSquare) => {
//     let lightNumber = 1;

//     changeSquare.addEventListener("mouseover", (e: MouseEvent) => {
//       changeSquare.style.setProperty("background", randomColor());
//       changeSquare.style.setProperty("filter", `brightness(${lightNumber})`);
//       changeLight();
//       function changeLight(): void {
//         if (lightNumber <= 0) return;
//         lightNumber = Number((lightNumber - 0.1).toFixed(1));
//       }
//     });
//   });
// }

// type RGB = `rgb(${number},${number},${number})`;

// function randomColor(): RGB {
//   const rando = () => Math.floor(Math.random() * 255) + 1;

//   return `rgb(${rando()},${rando()},${rando()})`;
// }

// // ---- Grid resizing button ----

// btn.addEventListener("click", () => {
//   const answer = prompt("Choose a grid size from 2 - 100");
//   choice = Number(answer);
//   createGrid();
//   colors();
// });

// // ---- Header colorize and bounce features ----

// const headerLength = header.innerText.length;
// wrapHeaderLetters();

// function wrapHeaderLetters(): void {
//   if (headerLength && header) {
//     for (let i = 0; i < headerLength; i++) {
//       const span = document.createElement("span");
//       span.innerText = header.innerText[i];

//       header.appendChild(span);
//     }
//     header.firstChild?.remove();
//   }
// }

// const newSpans: NodeListOf<HTMLSpanElement> =
//   document.querySelectorAll("h1 > span");

// setInterval(() => {
//   const index = randomNumber();
//   if (index == null) return;
//   const spanPicker = newSpans[index];
//   spanPicker.style.color = `${randomColor()}`;
//   spanPicker.setAttribute("class", "bounce");
// }, 750);

// setInterval(() => {
//   newSpans.forEach((span) => {
//     if (span.classList.value === "bounce") {
//       span.removeAttribute("class");
//     }
//   });
// }, 900);

// function randomNumber(): number | undefined {
//   return headerLength ? Math.floor(Math.random() * headerLength) : undefined;
// }
