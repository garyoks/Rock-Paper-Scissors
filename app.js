const userScore = 0;
const bobsScore = 0;
const userScore_span = document.getElementById("user-score");
const bobsScore_span = document.getElementById("bobs-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");



function getBobsChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function game(userChoice) {
    console.log("test event listener");
    console.log(" ");
//    getBobsChoice();
    let bobsChoice
}

function count() {

}

function main() {

    rock_button.addEventListener('click', function() {
        game("rock");
    })

    paper_button.addEventListener('click', function() {
        game("paper");
    })
    scissors_button.addEventListener('click', function() {
        game("scissors");
    })


}

main();






//      Test randomness of computer choices     //

const bob_rock_span = document.getElementById('bobs-rock-count');
const bob_paper_span = document.getElementById('bobs-paper-count');
const bob_scissors_span = document.getElementById('bobs-scissors-count');

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
    bob_rock_span.textContent = rCount;
    bob_paper_span.textContent = pCount;
    bob_scissors_span.textContent = sCount;
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        testRandomness();
    }
});

