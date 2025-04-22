const mainContent = document.querySelector('.main-content');
mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';
mainContent.style.alignItems = 'center';


const numberOfSquares = document.createElement('button');
const btnDiv = document.querySelector('.grid-button');
btnDiv.appendChild(numberOfSquares);

numberOfSquares.textContent = 'Click to customize size'
let numOfSquares = 16;
numberOfSquares.addEventListener("click", () => {
    let numOfSquares = prompt("Please enter a number to 100 max to customize how many squares for one side of the grid:");
    if (numOfSquares > 100) {
        return;
    }
    gridCreate(numOfSquares);
});

function increaseOpacity () {

}


function gridCreate (gridSize) {
    mainContent.innerHTML = "";
    for (let i = 1; i <= gridSize; i++) {
        const gameRow = document.createElement('div');
        gameRow.style.display = 'flex';
        gameRow.style.flexDirection = 'row';
        gameRow.style.height = `${800/gridSize}px`;
        mainContent.appendChild(gameRow);
        for (let j = 1; j <= gridSize; j++) {
            const gameSquare = document.createElement('div')
            gameSquare.addEventListener('mouseenter', () => {
                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                      color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                  }
                gameSquare.style.backgroundColor = `${getRandomColor()}`;
            });
            gameSquare.style.width = `${800/gridSize}px`;
            gameSquare.style.border = '.5px solid #000000';
            gameSquare.style.flex = "50 50 50";
            gameRow.appendChild(gameSquare);
    
        } 
    }
    
}

gridCreate(numOfSquares);