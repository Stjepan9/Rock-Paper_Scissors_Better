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


rock.addEventListener("click",function(){
    switch(randomComputerChoice()){
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
});

paper.addEventListener("click",function(){
    switch(randomComputerChoice()){
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
});

scissors.addEventListener("click",function(){
    switch(randomComputerChoice()){
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
});


const playRound = function(){
    
}