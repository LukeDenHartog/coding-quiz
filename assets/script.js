const countdown = document.getElementById('countdown');
let timeLeft = 60;

setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
}, 1000);