const userScore = 0;
const bobsScore = 0;
const userScore_span = document.getElementById("user-score");
const bobsScore_span = document.getElementById("bobs-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

rock_button.addEventListener('click', function() {
    console.log("you clicked rock");
})
