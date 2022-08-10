let choice = 100;

let grid = choice * choice;
// let square;
// let square = document.createElement('div');
for (let i = 0; i < grid; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    console.log(square +' inside');
}
console.log(square + ' outside');

document.documentElement.style.setProperty('--grid-size', choice);

let boink = document.querySelectorAll('.square');
// console.log(boink);
boink.forEach((boink) => {
    // boink.style.setProperty('background', 'blue');
    boink.addEventListener('mouseover', () => {
        boink.style.setProperty('background', 'rgb(219, 2, 219)');
    })
})

