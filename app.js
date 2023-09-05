let userScore = 0;
let bobsScore = 0;

const userScore_span = document.getElementById("user-score");
const bobsScore_span = document.getElementById("bobs-score");

const resultMessage_p = document.getElementById("result-message");
const declareWinner_p = document.getElementById("declare-winner");

const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const playAgain_button = document.getElementById("play-again");

function getBobsChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function determine_winner(userChoice) {
        let bobsChoice = getBobsChoice();

        // a true value will represent a win for the user and false a win for Bob
        if (bobsChoice === 'rock' && userChoice === 'scissors') {
            return false;
        } else if (bobsChoice === 'rock' && userChoice === 'paper') {
            return true;
        } else if (bobsChoice === 'paper' && userChoice === 'rock') {
            return false;
        } else if (bobsChoice === 'paper' && userChoice === 'scissors') {
            return true;
        } else if (bobsChoice === 'scissors' && userChoice === 'paper') {
            return false;
        } else if (bobsChoice === 'scissors' && userChoice === 'rock') {
            return true;
        }
}

function updateScore(winner) {
    if (winner === bobsScore) {
        bobsScore++;
        bobsScore_span.textContent = bobsScore;
        setTimeout(function() {
            bobsScore_span.classList.add('scoreChange');
        }, 0)
        
    } else if (winner === userScore) {
        userScore++;
        userScore_span.textContent = userScore;
        setTimeout(function() {
            userScore_span.classList.add('scoreChange');
        }, 0)

    }
}

function game (userChoice) {
    if (bobsScore >= 5 || userScore >= 5) {
        return;
    }

    if (userChoice === 'rock') {
        if (determine_winner("rock") == false) {            
            updateScore(bobsScore);
            if (bobsScore >= 5) {
                resultMessage_p.textContent = "Bob chose paper. Paper beats rock";
            } else { 
                resultMessage_p.textContent = "Bob chose paper. Paper beats rock. You lose this round";
            }
        } else if (determine_winner("rock") === true) {
            updateScore(updateScore);
            if (userScore >= 5) {
                resultMessage_p.textContent = "Bob chose scissors. Rock beats scissors";
            } else {resultMessage_p.textContent = "Bob chose scissors. Rock beats scissors. You win this round";
            }
        } else {
            resultMessage_p.textContent = "Bob also chose rock. You tied this round";
        }
    } else if (userChoice === 'paper') {
        if (determine_winner("paper") == false) {
            updateScore(bobsScore);
            if (bobsScore >= 5) {
                resultMessage_p.textContent = "Bob chose scissors. Scissors beats paper";
            } else { 
                resultMessage_p.textContent = "Bob chose scissors. Scissors beats paper. You lose this round";
            }
        } else if (determine_winner("paper") === true) {
            updateScore(userScore);
            if (userScore >= 5) {
                resultMessage_p.textContent = "Bob chose CHOICE. USERCHOICE beats CHOICE";
            } else {resultMessage_p.textContent = "Bob chose rock. Paper beats rock. You win this round";
            }
        } else {
            resultMessage_p.textContent = "Bob also chose paper. You tied this round";
        }
    } if (userChoice === 'scissors') {
        if (determine_winner("scissors") == false) {
            updateScore(bobsScore);
            if (bobsScore >= 5) {
                resultMessage_p.textContent = "Bob chose rock. Rock beats scissors";
            } else { 
                resultMessage_p.textContent = "Bob chose rock. Rock beats scissors. You lose this round";
            }  
        } else if (determine_winner("scissors") === true) {
            updateScore(userScore);
            if (userScore >= 5) {
                resultMessage_p.textContent = "Bob chose CHOICE. USERCHOICE beats CHOICE";
            } else {resultMessage_p.textContent = "Bob chose paper. Scissors beats paper. You win this round";
            }
        } else {
            resultMessage_p.textContent = "Bob also chose scissors. You tied this round";
        }
    }

    if (bobsScore >= 5) {
        declareWinner_p.textContent = "Game Over. You lose. Try harder next time.";
        setTimeout(function() {
            playAgain_button.style.display = "block";
        }, 1000)
    } else if (userScore >= 5) {
        declareWinner_p.textContent = "Game Over. You win. Bob wants a rematch.";
        setTimeout(function() {
            playAgain_button.style.display = "block";
        }, 1000)
    }
}

function reset_game() {
if (bobsScore >=5 || userScore >=5) {
    bobsScore = 0;
    userScore = 0;
    bobsScore_span.textContent = bobsScore;
    userScore_span.textContent = userScore;
    resultMessage_p.textContent = "";
    declareWinner_p.textContent = "";
    playAgain_button.style.display = "none";
}}

rock_button.addEventListener('click', function() {game('rock')});
paper_button.addEventListener('click', function() {game('paper')});
scissors_button.addEventListener('click', function() {game('scissors')});
playAgain_button.addEventListener('click', function() {reset_game()});

//      Test randomness of computer choices     //

const cpu_rock_span = document.getElementById('cpu-rock-count');
const cpu_paper_span = document.getElementById('cpu-paper-count');
const cpu_scissors_span = document.getElementById('cpu-scissors-count');

let rCount = 0;
let pCount = 0;
let sCount = 0;

function testRandomness() {
    for (let i = 0; i < 100000; i++) {
        let cpuChoice = getBobsChoice();
        if (cpuChoice === 'rock') {
            rCount++;
        } else if (cpuChoice === 'paper'){
            pCount++;
        } else if (cpuChoice === 'scissors'){
            sCount++;
        }
    }
    console.log(rCount);
    console.log(pCount);
    console.log(sCount);
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        testRandomness();
        cpu_rock_span.textContent = "Rock count: " + rCount;
        cpu_paper_span.textContent = "Paper count: " + pCount;
        cpu_scissors_span.textContent = "Scissors count: " + sCount;  
    }
});

