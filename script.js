const grid = document.querySelector('#grid');
const square = document.createElement('div');
const gridSize = document.createElement('input');



// grid.appendChild(square);
// square.className = 'squares';

// grid.appendChild(square2);
// square2.className = "squares";
// console.log(square.className);

// for ( let i = 1; i <= 255; i++) {
//     grid.appendChild(square.cloneNode());    
// }

for ( let i = 0; i < 256; i++) {

    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.setAttribute('class', 'squares');
    grid.appendChild(square);
    // grid.appendChild( document.createElement('div').className = 'squares' );
    // grid.appendChild(square.cloneNode());    
}


const squaresNodes = document.querySelectorAll('.squares');
console.log(squaresNodes);

squaresNodes.forEach( (square) => {
    square.addEventListener('mouseover', () => {
        console.log(square);
        square.style.backgroundColor = 'green';
    });
});
