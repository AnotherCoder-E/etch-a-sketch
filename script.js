const body = document.querySelector('body');
const grid = document.querySelector('#grid');
const square = document.createElement('div');
const gridSize = document.createElement('button');

gridSize.textContent = 'Change Grid size';
gridSize.className = 'gridSize';

gridSize.addEventListener('click', () => {
    
    while (true) {
    const userInput = prompt('Set number of squares per line (up to 100): ');
    console.log('User Input is: ' + userInput + '\n It\'s type is: ' + typeof userInput);
    if ( isNaN(userInput) || userInput === '') {
        alert('Wrong input. Provide correct one or press Cancel.');
    } else if ( userInput === null ) {
        alert('Canceled');
        return false;
    } else {
        grid.innerHTML = ''; // make that cleaning grid function
        createGrid(parseInt(userInput));
        return false;
    }
    }

});

body.insertBefore(gridSize, grid);


function createGrid(numOfSquares) {
    // TEST
    alert('createGrid function says \nUser Input is: ' + numOfSquares + '\n It\'s type is: ' + typeof numOfSquares);
    // END TEST

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
    console.log(squaresNodes);

    squaresNodes.forEach( (square) => {
        square.addEventListener('mouseover', () => {
            console.log(square);
            square.style.backgroundColor = 'green';
        });
    });

}