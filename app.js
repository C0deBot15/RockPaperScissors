let userScore = 0; //normal variables
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //dom variables: store dom elements
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); //Cashing the dom: storing something for future use

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =` ${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;  //sequence allows for the span tag to increase the user score on the chart
    computerScore_span.innerHTML= computerScore;
    result_p.classList.add('green-glow');
    setTimeout(() => result_p.classList.remove('green-glow'), 300);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    userScore_span.classList.add('green-glow');
    setTimeout(() => userScore_span.classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =` ${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose!`;
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;  //sequence allows for the span tag to increase the user score on the chart
    computerScore_span.innerHTML= computerScore;
    result_p.classList.add('red-glow');
    setTimeout(() => result_p.classList.remove('red-glow'), 300);
//realization that I could make the text and scoreboard glow red/green everytime either the user/computer wins!
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    computerScore_span.classList.add('red-glow');
    setTimeout(() => computerScore_span.classList.remove('red-glow'), 300);
    
}
//Functions for when the results are a draw including the change in text via the inner.html and the colour change thanks to classlist.
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =` ${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw!`;
    const userChoice_div = document.getElementById(userChoice);
    result_p.classList.add('gray-glow');
    setTimeout(() => result_p.classList.remove('gray-glow'), 300);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
    scoreBoard_div.classList.add('gray-glow')
    setTimeout(() =>scoreBoard_div.classList.remove('gray-glow'), 300);
}
// Functions of RPS
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            //console.log("YOU WIN!");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            //console.log("YOU LOSE!");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //console.log("IT'S A DRAW!");
            break;        
    }
}
// 46:16 RPS

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();

//General gist of the Rock Paper Scissors game 
// Rock>Scissors>Paper>Rock
// Player gets a point if he wins, Same goes to the opponent if they win. Lastly if the results are the same neither gets points.