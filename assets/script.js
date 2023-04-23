startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
yourFinalScore = document.getElementById("your-final-score");
let timer;
let timeLeft = 60;
currentScore = "";
finalScoreHeader = "<h1>All Done!</h1>";




  


startButton.addEventListener("click", hideMainBox);
startButton.addEventListener("click", function() {
    
    timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            yourFinalScore.className = 'show';
            clearInterval(timer);
            countdown.textContent = ' Time is up!';
            mainBox.innerHTML = finalScoreHeader + "Your final score is" + currentScore;
            
        }
 }, 1000);
});

function hideMainBox() {
    mainBox.style.display = "none";
  }












