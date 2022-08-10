// const square = document.createElement('div');
// square.classList.add('square');
// container.appendChild(square);

// const square2 = document.createElement('div');
// square2.classList.add('square');
// container.appendChild(square2);

let grid = 40;

let buttz = document.createElement('div');
for (let i = 0; i < grid; i++) {
    buttz[i] = document.createElement('div');
    buttz[i].classList.add('square');
    container.appendChild(buttz[i]);
    console.log(buttz[i] +' inside');
}
console.log(buttz + ' outside');

// document.documentElement.style.setProperty('--grid-size', grid);