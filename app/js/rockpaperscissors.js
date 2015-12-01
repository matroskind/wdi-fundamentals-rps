////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   
    
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var player;
    var comp;
    if(computerMove===null){
        comp = randomPlay();
    }
    else{
        comp = computerMove;
    }
    
    if(playerMove===null){
        player = getInput();
    }
    else{
        player= playerMove;
    }
    
        if(player==="rock"){
            if(comp==="rock"){
            winner = "tie";
            }
            else if(comp==="scissors"){
                winner = "player";
            }else{
                winner = "computer";
            }
        }
        else if(player==="paper"){
            if(comp==="rock"){
            winner = "player";
            }
            else if(comp==="scissors"){
                winner = "computer";
            }else{
                winner = "tie";
            }
        }
        else if(player==="scissors"){
                if(comp==="rock"){
            winner = "computer";
            }
            else if(comp==="scissors"){
                winner = "tie";
            }else{
                winner = "player";
            }
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins<5 && computerWins<5){
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner= getWinner(playerMove, computerMove);
        if(winner ==="computer"){
            computerWins++;
            console.log("You picked "+playerMove+" and computer picked "+computerMove+".");
            console.log("Computer wins!");
        }
        else if(winner === "player"){
            playerWins++;
            console.log("You picked "+playerMove+" and computer picked "+computerMove+".");
            console.log("You win!");
        }else{
            console.log("You picked "+playerMove+" and computer picked "+computerMove+".");
            console.log("Let's play again!")
        }
        console.log("The score is you: "+playerWins + "to " +computerWins+ " computer.");
        
    }
    console.log("You won " + playerWins + " times and computer won " + computerWins + " times.");
    return [playerWins, computerWins];
}

playToFive();