let gameboard = document.createElement('div');
gameboard.classList.add('gameboard')
document.body.appendChild(gameboard)

const playerFactory = (type, marker, positions) => {
    return {type, marker, positions: []}
}
let player1 = playerFactory("player1", "❌","") // player 1
let player2 = playerFactory("player2", "⭕️", "") // player 2
let activePlayer = "" // auxiliar player

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

const winningCondition = [ // all the posible winning combinations
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]




const gameBoard = () => { // all the gameboard

    let board = [];
    for (let i = 0; i<9; i++) {
        board.push(''); //making the array.length = 9
    }
    
    board.forEach((cell, index) => { // creating the cells
        cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('click', function(){
            cell.classList.add(activePlayer.type)
            if (!activePlayer.positions.includes(index)){ // prevents the player array from storing one position twice
                activePlayer.positions.push(index);
            }
            cell.innerText = activePlayer.marker // changes the cell text to the one in the playerFactory.type
            checkWinner() // checks if there is any winner after any move
            nextPlayer() // swap to the next player after any move
            console.log(activePlayer.positions) // auxiliar print REMOVE IN THE FINAL VERSION
            cell.style.pointerEvents = 'none'; // remove event listener after click
        }) 
        

        cell.innerText = index

        
        gameboard.appendChild(cell); // pushing the cell to the board
        return cell
    })
    
}


function checkWinner(){ // checks the winner if any of the win conditions is accomplished
    winningCondition.forEach(condition =>{
        if (activePlayer.positions.includes(condition[0]) && activePlayer.positions.includes(condition[1]) && activePlayer.positions.includes(condition[2])){
            console.log('winner is ', activePlayer.type)
        }
    })
}

function nextPlayer(){ //swaps the player
    if (activePlayer.type == player2.type){
        player2 = activePlayer // updates player to the active player before changin it
        activePlayer = player1 // swaps the auxiliar to the next player
        console.log('changin to 1player') // auxiliar print REMOVE IN THE FINAL VERSION
        return activePlayer; // returns the (before "next player") current player
    }
    if (activePlayer.type == player1.type){ //the same as above but for player 2
        player1 = activePlayer
        activePlayer =player2
        console.log('changin to 2player')
        return activePlayer;
    }
}

function randomStart(max){
    starting = Math.floor(Math.random() * max)
    console.log(starting)
    if (starting == 0){
        activePlayer = player1
    }
    else {
        activePlayer = player2
    }
}

randomStart(2)
console.log(activePlayer.type)
gameBoard()




