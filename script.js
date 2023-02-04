let gameboard = document.createElement('div');
gameboard.classList.add('gameboard')
document.body.appendChild(gameboard)

const playerFactory = (type, marker, positions) => {
    return {type, marker, positions: []}
}
let player1 = playerFactory("player1", "x","")
let player2 = playerFactory("player", "o", "")
let activePlayer = ""


const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]






const gameBoard = () => {

    let board = [];
    for (let i = 0; i<9; i++) {
        board.push('');
    }
    
    board.forEach((cell, index) => {
        cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('click', function(){
            cell.classList.add('marked')
            if (!player1.positions.includes(index)){
                player1.positions.push(index);
            }
            cell.innerText = activePlayer.marker
            checkWinner()

            console.log(player1.positions)
        }) 
        
        
        cell.innerText = index
        gameboard.appendChild(cell);
    })
    
}


function checkWinner(){
    winningCondition.forEach(condition =>{
        if (activePlayer.positions.includes(condition[0]) && activePlayer.positions.includes(condition[1]) && activePlayer.positions.includes(condition[2])){
            return console.log('winner is ', activePlayer.type)
        }
    })
}



activePlayer = player1
gameBoard()




