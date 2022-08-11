let choice;

baseArea();

function baseArea() {
    choice = 16;
}



createGrid();
function createGrid() {
    let grid = choice * choice;
    document.documentElement.style.setProperty('--grid-size', choice);
    for (let i = 0; i < grid; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}



let changeSquare = document.querySelectorAll('.square');
changeSquare.forEach((changeSquare) => {
    changeSquare.addEventListener('mouseover', () => {
        changeSquare.style.setProperty('background', 'rgb(219, 2, 219)');
    })
})

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let answer = prompt('Choose grid size from 2 - 100', )
    // choice = parseInt(answer);
    createGrid(parseInt(answer));
})
