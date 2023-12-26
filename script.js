// allow user to change this later 
const squaresPerSide = 16;
const squaresTotal = squaresPerSide**2;
const squareArray = []; 

// let elements = document.getEleementsByTagName('div');

// references 
const container = document.querySelector('#etch-container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
console.log(container.clientWidth);
console.log(containerWidth + " ff " + containerHeight);

const squareWidth = containerWidth / squaresPerSide;
const squareHeight = containerHeight / squaresPerSide;
console.log(`squareWidth ${squareWidth} totalW ${squareWidth * squaresTotal}`)

const squareStyle = `width: ${squareWidth}px;
                     height: ${squareHeight}px;`

createSquares(squaresTotal);

// create all div squares
function createSquares(squares) {
    for(let i = 0; i < squaresTotal; i++){
        squareArray[i] = document.createElement('div');
        squareArray[i].setAttribute("style", squareStyle);
        //squareArray[i].classList.toggle('hoverEffect');
       // squareArray[i].addEventListener('hover', changeColour);
        container.appendChild(squareArray[i]);
    }
}

/*
function changeColour(event) {
    this.classList.toggle('')
}
*/
