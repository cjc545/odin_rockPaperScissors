//Variable declarations
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let outputString = "";
let i = 0;

const playBtn = document.querySelector("button#play");
const randomBtn = document.querySelector("button#random");

const output = document.querySelector("div.output");
const score = document.querySelector("div.score");
const buttonContainer = document.querySelector("div.btn-container");
const buttonChoices = document.querySelectorAll("button#rock, button#paper, button#scissors, button#random");

buttonContainer.hidden = "true"
//------------------------------------------
playBtn.addEventListener("click", () => {       // add listener for when user hits play button
    computerScore = 0;                          // reset score
    playerScore = 0;
    i = 0;                                      
    for(const child of buttonContainer.children) // reset disabled buttons if they play again
        child.removeAttribute("disabled")

    score.textContent = ""                      // reset text outputs for general & score
    buttonContainer.removeAttribute("hidden");  // unhide rock, paper, scissors & random buttons
    playBtn.hidden = "true"                     // hide play button
    playerChoice = output.textContent = "Rock, Paper, Scissors, or Random?"

});

for(i = 0; i < buttonChoices.length; i++){              // for each button in button container,
    buttonChoices[i].addEventListener("click", () => {  // add a click listener & reset
        outputString = ""                               // output text and string variable so
        output.textContent = ""                         // it doesn't keep concatinating
        playRockPaperScissors(buttonChoices[i].textContent);
    })
}

function playRockPaperScissors(choice){                 // if game isn't won, play game
    if(computerScore != 5 && playerScore != 5){
        choice = checkPlayerChoice(choice.toLowerCase());
        computerChoice = getComputerChoice(rng())
        matchDecider(choice, computerChoice)
    }
}

function checkScore(){                                  // if computer gets 5 points,
    if(computerScore == 5){                             // set win text, disable buttons, but
        output.textContent = "Computer Wins!"           // show play button. 
        for(let i = 0; i < buttonChoices.length; i++)   // vice versa if user wins
            buttonChoices[i].setAttribute("disabled", "")
        playBtn.removeAttribute("hidden");
    }
    else if(playerScore == 5){
        output.textContent = "You Win!"
        for(let i = 0; i < buttonChoices.length; i++)
            buttonChoices[i].setAttribute("disabled", "")
        playBtn.removeAttribute("hidden");
    }
    else {}
}

function rng(){                                         // simple rng function for computer
    let rng = Math.floor(Math.random() * 3);
    return rng;
}

function getComputerChoice(x){
    switch (x) {
        case 0:
            console.log("pc choice was rock")
            outputString += "and pc choice was rock. "
            return 0
            ;
        case 1:
            console.log("pc choice was paper")
            outputString += "and pc choice was paper. "
            return 1
            ;
        case 2:
            console.log("pc choice was scissors")
            outputString += "and pc choice was scissors. "
            return 2
            ;
        default:
            break;
    }
}

function checkPlayerChoice(choice){
    if (choice == "rock" || choice === 0){
        console.log("player choice was rock")
        outputString += "You chose rock, "
        return 0;
    }
    else if (choice == "paper" || choice === 1){
        console.log("player choice was paper")
        outputString += "You chose paper, "
        return 1;
    }
    else if (choice == "scissors" || choice === 2){
        console.log("player choice was scissors")
        outputString += "You chose scissors, "
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
        outputString +=`so its a draw` 

    if (player == 0 && computer == 1 || 
        player == 1 && computer == 2 ||
        player == 2 && computer == 0 ){
            outputString += "so computer wins this round" 
            computerScore++
        }

    if (player == 0 && computer == 2 ||
        player == 1 && computer == 0 ||
        player == 2 && computer == 1){
            outputString += "so you win this round"
            playerScore++
    }
    score.textContent = `current score: player - ${playerScore}, computer - ${computerScore}`
    output.textContent = outputString;
    checkScore();
    }

