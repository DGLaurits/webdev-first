// For edge a sketch board

const easBoard = document.getElementById("EASBoard");
const easResetButton = document.querySelector('#EdgeASketch button')
const easLengthInput = document.querySelector('#EdgeASketch input')

easResetButton.addEventListener('click', easResetBoard)

easDrawBoard()

function easColorPixel() {
    let color = 'black'
    this.style.backgroundColor = color
}

function easDrawBoard() {
    let sideLength = easLengthInput.value
    for (y = 0; y<sideLength; y++){
        row = document.createElement('div');
        row.classList.add('eas-row')
        for (x = 0; x<sideLength; x++){
            pixel = document.createElement('div');
            pixel.classList.add('eas-pixel');
            pixel.addEventListener('mouseenter', easColorPixel);
            row.appendChild(pixel);
        }
        easBoard.appendChild(row)
    } 
}

function easResetBoard() {
    easBoard.innerHTML = ""
    easDrawBoard()
}