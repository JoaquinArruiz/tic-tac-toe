let gameboard = document.createElement('div');
gameboard.classList.add('gameboard')
document.body.appendChild(gameboard)

const playerFactory = (type, marker, positions) => {
    return {type, marker, positions: []}
}
let player1 = playerFactory("player1", "❌","") // player 1
let player2 = playerFactory("player2", "⭕️", "") // player 2
let activePlayer = "" // auxiliar player


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
            cell.classList.add(activePlayer.type)
            if (!activePlayer.positions.includes(index)){
                activePlayer.positions.push(index);
            }
            cell.innerText = activePlayer.marker
            checkWinner()
            nextPlayer()
            console.log(activePlayer.positions)
            cell.style.pointerEvents = 'none';
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

function nextPlayer(){
    if (activePlayer.type == player2.type){
        player2 = activePlayer // updates player to the active player before changin it
        activePlayer = player1
        console.log('changin to 1player')
        return activePlayer;
    }
    if (activePlayer.type == player1.type){
        player1 = activePlayer // updates player to the active player before changin it
        activePlayer =player2
        console.log('changin to 2player')
        return activePlayer;
    }
}

activePlayer = player1
gameBoard()




