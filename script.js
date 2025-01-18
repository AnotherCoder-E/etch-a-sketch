const body = document.querySelector('body');
const grid = document.querySelector('#grid');
const square = document.createElement('div');
const gridSize = document.createElement('button');

gridSize.textContent = 'Change Grid size';
gridSize.className = 'gridSize';

createGrid(16);

gridSize.addEventListener('click', () => {
    
    while (true) {
    const userInput = prompt('Set number of squares per line (up to 100): ');
    if ( isNaN(userInput) || userInput === '') {
        alert('Wrong input. Provide correct one or press Cancel.');
    } else if ( userInput > 100 ) {
        alert('Provide a number that is equal to or less than 100.')
    } else if ( userInput === null ) {
        alert('Canceled');
        return false;
    } else {
        cleanGrid();
        createGrid(parseInt(userInput));
        return false;
    }
    }

});

body.insertBefore(gridSize, grid);


function createGrid(numOfSquares) {

    const squaresAmount = numOfSquares**2; // power it
    const squareSize = String( 800 / numOfSquares ) + 'px';
    
    for ( let i = 0; i < squaresAmount; i++) {

        const square = document.createElement('div');
        square.setAttribute('id', `square${i}`);
        square.setAttribute('class', 'squares');
        square.style.width = squareSize;
        square.style.height = squareSize;
        grid.appendChild(square);
    }

    const squaresNodes = document.querySelectorAll('.squares');

    squaresNodes.forEach( (square) => {
        square.addEventListener('mouseover', () => {
            if ( square.style.backgroundColor === '') {
                square.style.opacity = '0.1';
                square.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
            } else {
                square.style.opacity = String(Number(square.style.opacity) + 0.1);
            }
        });
    });

}

function cleanGrid() {
    grid.innerHTML = '';
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}