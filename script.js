// allow user to change this later 
let squaresPerSide = 16;
let squaresTotal = squaresPerSide**2;
let squareArray = []; 
let currentColor = 'black';

// Getting and sizing grid  
const container = document.querySelector('#etch-container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

let squareWidth = containerWidth / squaresPerSide;
let squareHeight = containerHeight / squaresPerSide;

let squareStyle = `width: ${squareWidth}px;
                     height: ${squareHeight}px;
                     opacity: 1;`


// setup buttons
const chooseSquaresBtn = document.querySelector("#choose-square");
const chooseDrawBtn = document.querySelector("#draw");
const chooseHoverBtn = document.querySelector("#hover");
const chooseRandomBtn = document.querySelector("#colourRandom");
const chooseBlackBtn = document.querySelector("#colourBlack");
const chooseRedBtn = document.querySelector("#colourRed");
const chooseBlueBtn = document.querySelector("#colourBlue");
const chooseEraseBtn = document.querySelector("#erase");


chooseSquaresBtn.addEventListener('click', changeSquares); // no params
chooseDrawBtn.addEventListener('click', changeBrush);
chooseDrawBtn.brush = "draw";
chooseHoverBtn.addEventListener('click', changeBrush);
chooseHoverBtn.brush = "hover";
chooseRandomBtn.addEventListener('click', randColour);
chooseBlackBtn.addEventListener('click', () => currentColor = `rgb(0,0,0)`);
chooseRedBtn.addEventListener('click', () => currentColor = `rgb(255,0,0)`);
chooseBlueBtn.addEventListener('click', () => currentColor = `rgb(0,0,255)`);
chooseEraseBtn.addEventListener('click',changeBrush); 
chooseEraseBtn.brush = "erase";


// setup
createSquares();
// changeBrush('draw');

function randColour(event) {
    let red, blue, green;
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    currentColor = `rgb(${red},${green},${blue})`;
    // event.target.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
}

// yet to be implemented 
function chooseColour(event) {
    console.log(event.target.style.opacity);
    event.target.style.backgroundColor = currentColor;
    if(event.target.style.opacity == 1) {
        console.log(true);
         event.target.style.opacity = 0;
    }
            // let opacity1 = (parseFloat(event.target.style.opacity) - 0.1).toFixed();
            // let opacity = 0.5;

    event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
    console.log(event.target.style.opacity);
}

// for hover - full opacity
function chooseColourHover(event) {
    event.target.style.backgroundColor = currentColor;
    event.target.style.opacity = '1';
}

function whiteColour(event) {
    event.target.style.backgroundColor = 'rgb(255,255,255)';
}


// create all div squares
function createSquares() {
    for(let i = 0; i < squaresTotal; i++){
        squareArray[i] = document.createElement('div');
        squareArray[i].setAttribute("style", squareStyle);
        squareArray[i].classList.toggle("squareClass");
        //squareArray[i].classList.toggle('hoverEffect');
       // squareArray[i].addEventListener('hover', changeColour);
        container.appendChild(squareArray[i]);
    }
}

function changeBrush(event) {
    let allBoxes = document.getElementsByClassName("squareClass");
    for(let i = 0; i < allBoxes.length; i++) {
        if(event.currentTarget.brush == 'draw')
        {
            allBoxes[i].removeEventListener('mouseover', chooseColourHover);
            allBoxes[i].removeEventListener('mouseout', whiteColour);

            allBoxes[i].addEventListener('mouseover', chooseColour);
            allBoxes[i].addEventListener('mouseout', () => null);

            //squareArray[i].addEventListener('mouseout', whiteColour);
        }
        else if(event.target.brush == 'hover')
        {
            allBoxes[i].removeEventListener('mouseover', chooseColour);
            allBoxes[i].removeEventListener('mouseout', () => null);
            allBoxes[i].addEventListener('mouseover', chooseColourHover);
            allBoxes[i].addEventListener('mouseout', whiteColour);
        }
        else if(event.target.brush == 'erase')
        {
            allBoxes[i].style.backgroundColor = 'white';
            allBoxes[i].style.opacity = '1';
        }
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

// remove the previous divs used for squares, in prep for user entered amount
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