let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function playRockPaperScissors(){
    playerChoice = window.prompt("Rock, Paper, Scissors, or Random?", " ")
    playerChoice = checkPlayerChoice(playerChoice.toLowerCase());
    computerChoice = getComputerChoice(rng())
    matchDecider(playerChoice, computerChoice)

    if(computerScore < 5 && playerScore < 5){
        playRockPaperScissors()
    }
    
}

function rng(){
    let rng = Math.floor(Math.random() * 3);
    return rng;
}

function getComputerChoice(x){
    switch (x) {
        case 0:
            console.log("pc choice was rock")
            return 0
            ;
        case 1:
            console.log("pc choice was paper")
            return 1
            ;
        case 2:
            console.log("pc choice was scissors")
            return 2
            ;
        default:
            break;
    }
}

function checkPlayerChoice(choice){
    if (choice == "rock" || choice === 0){
        console.log("player choice was rock")
        return 0;
    }
    else if (choice == "paper" || choice === 1){
        console.log("player choice was paper")
        return 1;
    }
    else if (choice == "scissors" || choice === 2){
        console.log("player choice was scissors")
        return 2;
    }
    else if(choice == "random"){
        let random = rng()
        checkPlayerChoice(random)
        return random;
    }
    else{
        console.log("choice invalid, please choose rock, paper, scissors or random")
    }
}

function matchDecider(player, computer){
        
    if (player == computer)
            console.log(`its a draw`)

        if (player == 0 && computer == 1 || 
            player == 1 && computer == 2 ||
            player == 2 && computer == 0 ){
                console.log("computer wins") 
                computerScore++

            }

        if (player == 0 && computer == 2 ||
            player == 1 && computer == 0 ||
            player == 2 && computer == 1){
                console.log("player wins")
                playerScore++
        }
        console.log(`current score: player - ${playerScore}, computer - ${computerScore}`)

    }

