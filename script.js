
let gameboard = document.createElement('div');
gameboard.classList.add('gameboard')
document.body.appendChild(gameboard)

const playerFactory = (type, marker) => {
    return {type, marker}
}

const gameBoard = () => {

    let board = [];
    for (let i = 0; i<9; i++) {
        board.push('');
    }
    
    board.forEach((cell, index) => {
        cell = document.createElement('div');
        cell.classList.add('cell')
        
        cell.innerText = index
        gameboard.appendChild(cell);
    })
}

gameBoard()




