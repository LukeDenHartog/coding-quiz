startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
let timer;
let timeLeft = 60;
currentScore = "";
yourFinalScore = "<h1>All Done!</h1><p> Your final score is.</p>";


startButton.addEventListener("click", function() {
    
    timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.textContent = 'Time is up!';
            mainBox.innerHTML = yourFinalScore + currentScore;
            
        }
 }, 1000);
});

















