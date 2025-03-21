//----Added DOM loader-----
document.addEventListener("DOMContentLoaded",function(){});

//---- Added querySelectors-----
const options = document.querySelector("#options");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

const roundWinnerDisplay = document.querySelector("#roundWinnerDisplay");
const optionWinnerDisplay = document.querySelector("#optionWinnerDisplay");


const playerDisplay = document.querySelector("#playerOption");
const computerDisplay = document.querySelector("#computerOption");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");


const restart = document.querySelector("#restart");

let choices = ["rock", "paper", "scissors"];
//-- function for computerChoice-----
const randomComputerChoice = function(){
    let choice;
    choice = choices[Math.floor(Math.random()*3)]
    return choice;
};

//--- Added EventListeners for computerDisplay of choice----
rock.addEventListener("click",function(){
    let computer = randomComputerChoice();
    switch(computer){
        case "rock":
            computerDisplay.innerHTML = "&#128074";
            break;
        case "paper":
            computerDisplay.innerHTML = "&#129306";
            break;
        case "scissors":
            computerDisplay.innerHTML = "&#9996";
            break;
    }

    playerDisplay.innerHTML = "&#128074";

    getWinner("rock",computer);
});

paper.addEventListener("click",function(){
    let computer = randomComputerChoice();
    switch(computer){
        case "rock":
            computerDisplay.innerHTML = "&#128074";
            break;
        case "paper":
            computerDisplay.innerHTML = "&#129306";
            break;
        case "scissors":
            computerDisplay.innerHTML = "&#9996";
            break;
    }

    playerDisplay.innerHTML = "&#129306";
    getWinner("paper",computer);
});

scissors.addEventListener("click",function(){
    let computer = randomComputerChoice();
    switch(computer){
        case "rock":
            computerDisplay.innerHTML = "&#128074";
            break;
        case "paper":
            computerDisplay.innerHTML = "&#129306";
            break;
        case "scissors":
            computerDisplay.innerHTML = "&#9996";
            break;
    }
    playerDisplay.innerHTML = "&#9996";
    getWinner("scissors",computer);
});

let result;

const getWinner = function(playerChoice,computer){
    if(playerChoice === computer){
        result = "TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computer ==="scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computer === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computer === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    switch(result){
        case "TIE":
            roundWinnerDisplay.textContent = "IT IS A TIE";
            optionWinnerDisplay.textContent = `BOTH CHOOSE ${playerChoice.toUpperCase()}`;
            break;
        case "YOU WIN!":
            roundWinnerDisplay.textContent = "YOU WIN!";
            optionWinnerDisplay.textContent = `${playerChoice.toUpperCase()} BEATS ${computer.toUpperCase()}`;
            break;
        case "YOU LOSE!":
            roundWinnerDisplay.textContent = "YOU LOSE!";
            optionWinnerDisplay.textContent = `${computer.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
            break;
    };
}
