let choice = 20;

let grid = choice * choice;

let square = document.createElement('div');
for (let i = 0; i < grid; i++) {
    square[i] = document.createElement('div');
    square[i].classList.add('square');
    container.appendChild(square[i]);
    console.log(square[i] +' inside');
}
console.log(square + ' outside');

// let main = document.querySelector('#container');
// main.style.cssText = `grid-template-columns: repeat(${grid}, 1fr);
// grid-template-rows: repeat(${grid}, 1fr);`;

document.documentElement.style.setProperty('--grid-size', choice);