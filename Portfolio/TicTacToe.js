// Assigning a variable to the html cell classes
const spaces = document.querySelectorAll(".space");
// assigning a variable the html element display board
const displayBoard = document.getElementById("displayBoard");
// assigning a variable to the restart button
const restart = document.getElementById("restart");

// variable to help determine a winner
const winningRules = [
    [0, 3, 6],
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8]
    
];
let spaceArea = ["", "", "", "", "", "", "", "", ""];  // creaty empty spaces
let currentPlayer = "X"; // variable for current player
let playing = false;

gameSetup();

// creating a function to set up our tic tac toe game
function gameSetup(){
    spaces.forEach(space => space.addEventListener("click", spaceClicked));
    restart.addEventListener("click", restartGame);
    displayBoard.textContent = `${currentPlayer}'s turn`;
    playing = true;
}
function spaceClicked(){
    const spaceIndex = this.getAttribute("spaceIndex");

    if(spaceArea[spaceIndex] != "" || !playing){
        return;
    }

    updateSpace(this, spaceIndex);
    Winner();
}
// function to update cell 
function updateSpace(space, index){
    spaceArea[index] = currentPlayer;
    space.textContent = currentPlayer;
}

// function to determine a player's turn
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    displayBoard.textContent = `${currentPlayer}'s turn`;
} 

// function to determine winner
function Winner(){
    let gameOver = false;

    for(let i = 0; i < winningRules.length; i++){
        const condition = winningRules[i];
        const spaceA = spaceArea[condition[0]];
        const spaceB = spaceArea[condition[1]];
        const spaceC = spaceArea[condition[2]];

        if(spaceA == "" || spaceB == "" || spaceC == ""){
            continue;
        }
        if(spaceA == spaceB && spaceB == spaceC){
            gameOver = true;
            break;
        }
    }

    if(gameOver){
        displayBoard.textContent = `${currentPlayer} wins!`;
        playing = false;
    }
    else if(!spaceArea.includes("")){
        displayBoard.textContent = `Draw!`;
        playing = false;
    }
    else{
        changePlayer();
    }
}
// function to restart Game
function restartGame(){
    currentPlayer = "X";
    spaceArea = ["", "", "", "", "", "", "", "", ""];
    displayBoard.textContent = `${currentPlayer}'s turn`;
    spaces.forEach(space => space.textContent = "");
    playing = true;
}