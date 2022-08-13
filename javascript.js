
let choice;

// Starting grid size

baseArea();
function baseArea() {
    choice = 16;
}

// Grid creator

createGrid();
function createGrid() {
    if (!(choice > 2 | choice < 100) | (choice < 2 | choice > 100)) return;
    if (document.querySelector('.square')) {
        let beGone = document.querySelectorAll('.square');
        beGone.forEach(beGone => {
            beGone.remove();
        });
    }
    let grid = choice * choice;
    document.documentElement.style.setProperty('--grid-size', choice);
    for (let i = 0; i < grid; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

// Hover color changer

colors();
function colors() {
    let changeSquare = document.querySelectorAll('.square');
    changeSquare.forEach(changeSquare => {
        changeSquare.addEventListener('mouseover', () => {
            changeSquare.style.setProperty('background', randomColor());
        })
    })
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Grid resizing button

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let answer = prompt('Choose a grid size from 2 - 100', )
    // choice = parseInt(answer);
    choice = parseInt(answer);
    createGrid();
    colors();
})
