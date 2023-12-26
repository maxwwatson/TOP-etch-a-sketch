// allow user to change this later 
let squaresPerSide = 16;
let squaresTotal = squaresPerSide**2;
let squareArray = []; 

// setup button
const chooseSquaresBtn = document.querySelector("#choose-square");
chooseSquaresBtn.addEventListener('click', changeSquares);

// Getting and sizing grid  
const container = document.querySelector('#etch-container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

let squareWidth = containerWidth / squaresPerSide;
let squareHeight = containerHeight / squaresPerSide;

let squareStyle = `width: ${squareWidth}px;
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

function changeSquares() {
    let response;
    do
    {
        response = parseInt(prompt("Enter new numbers of Squares per side (must be less than 100)"));
        squaresPerSide = response;
    } while (response <=0  && response > 100) 
    removeSquares();
    updateGridVariables(); 
    createSquares(squaresTotal);
}

function removeSquares() {
    for(let i = squareArray.length - 1; i >= 0; i--) {
        container.removeChild(squareArray[i]);
        squareArray.pop();
    }   
}

// update grid every time button change squares is pushd with its function
// executed
function updateGridVariables () {
    squaresTotal = squaresPerSide**2;
    squareWidth = containerWidth / squaresPerSide;
    squareHeight = containerHeight / squaresPerSide;
    squareStyle = `width: ${squareWidth}px;
                   height: ${squareHeight}px;`
    
}