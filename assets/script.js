startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
yourFinalScore = document.getElementById("your-final-score");
displayScore = document.querySelector('.display-score');
header = document.querySelector('header');

let timer;
let timeLeft = 60;
let score = 0;
let finalScore = `<p>Your final score is ${score}<p>`;



submitScoreButton= document.getElementById("submit-score");
submitScoreButton.addEventListener("click", displayHighscores);

function displayHighscores() {
        yourFinalScore.className = 'hide';
        header.className = 'hide';
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

function hideMainBox() {
    mainBox.style.display = "none";
  }












