startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
yourFinalScore = document.getElementById("your-final-score");
displayScore = document.querySelector('.display-score');
header = document.querySelector('header');
highscoresList = document.getElementById("highscores");


let timer;
let timeLeft = " " + 60;
let score = 0;
let finalScore = `<p>Your final score is ${score}<p>`;



backButton = document.getElementById("back-button");
backButton.addEventListener("click", startOver);

function startOver () {
        highscoresList.className = 'hide';
        header.className = 'header-flex-margin';
        mainBox.className = "quiz-flexbox-attritbutes";

      

}

submitScoreButton= document.getElementById("submit-score");
submitScoreButton.addEventListener("click", displayHighscores);

function displayHighscores() {
        yourFinalScore.className = 'hide';
        header.className = 'hide';
        highscoresList.className = 'show';

}


startButton.addEventListener("click", hideMainBox);
startButton.addEventListener("click", function() {
    
    timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = "" + timeLeft;

        if (timeLeft <= 0) {
            yourFinalScore.className = 'quiz-flexbox-attritbutes';
            clearInterval(timer);
            countdown.textContent = ' Time is up!';
            displayScore.innerHTML = finalScore;
            
        }
 }, 100);
});


// Reset the time limit to 60 seconds
backButton.addEventListener("click", function() {
    clearInterval(timer);
    timeLeft = 60; 
    countdown.textContent = "" + timeLeft;
  });



function hideMainBox() {
    mainBox.className = "hide";
  }












