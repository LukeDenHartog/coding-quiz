startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
yourFinalScore = document.getElementById("your-final-score");
displayScore = document.querySelector('.display-score');
header = document.querySelector('header');
highscoresList = document.getElementById("highscores");
viewHS = document.getElementById("view-hs");
quizHide = document.querySelector(".flex");
clearButton = document.getElementById("clear-button");
headerFlexbox = document.getElementById('header-flexbox');
backButton = document.getElementById("back-button");
quizFlexbox = document.getElementById('quiz-flexbox');
correctAnswer = document.getElementById("correct-answer-display");
incorrectAnswer = document.getElementById("wrong-answer-display");
submitScoreButton = document.getElementById("submit-score");
leaderBoard = document.getElementById("highscore-paragraph-ele");

let timer;
let timeLeft = 60;
let score = 0;


quizFlexbox.className = "hide";

backButton.addEventListener("click", startOver);
submitScoreButton.addEventListener("click", displayHighscorez);
viewHS.addEventListener("click", viewHighScores);

function startOver() {
    highscoresList.className = 'hide';
    header.className = 'header-flex-margin';
    mainBox.className = "quiz-flexbox-attritbutes";
}

function displayHighscorez() {
    yourFinalScore.className = 'hide';
    header.className = 'hide';
    highscoresList.className = 'show';
}

function viewHighScores() {
    yourFinalScore.className = 'hide';
    header.className = 'hide';
    highscoresList.className = 'show';
    mainBox.className = 'hide';
    highscorez.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.score}`;
        leaderBoard.appendChild(li);
    });
}

startButton.addEventListener("click", hideMainBox);
startButton.addEventListener("click", function () {
    quizFlexbox.className = "flex";
    timer = setInterval(() => {
        timeLeft--;
        countdown.textContent = "" + timeLeft;

        if (timeLeft <= 0 && highscoresList.className === 'hide') {
            yourFinalScore.className = 'quiz-flexbox-attritbutes';
            quizFlexbox.className = "hide";
            clearInterval(timer);
            countdown.textContent = 'The duration has ended!';
            displayScore.textContent = `Your Final Score is  ${score}`;
        }
    }, 1000);
});

// Reset the time limit to 60 seconds
backButton.addEventListener("click", function () {
    clearInterval(timer);
    timeLeft = 60;
    countdown.textContent = "" + timeLeft;
});



function hideMainBox() {
    mainBox.className = "hide";
    viewHS.className = "hide"
    headerFlexbox.classList.remove("header-flex-margin")
    headerFlexbox.classList.add('header-flex-margin02')
};

// questions
const questions = [
    {
        question: "What does JSON mean?",
        choices: ["Cascading Style Sheets", "Java", "JavaScript Object Notation", "Jabba the hutt"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "What does localStorage allow you to do?",
        choices: ["Nothing", "Store data", "See the future", "Apply color"],
        answer: "Store data"
    },
    {
        question: "What does clearInterval() do?",
        choices: ["Cancels a timer", "Clears the console", "Clears Terminal", "Nothing"],
        answer: "Cancels a timer"
    },
    {
        question: "What does CDN stand for?",
        choices: ["Cancels Delivery Net", "Cats, Dogs & Narwhals ", "Content delivery network", "Nothing"],
        answer: "Content delivery network"
    },
    {
        question: "What is the average air speed velocity of a Unladen Swallow?",
        choices: ["69mph", "What's a Unladen Swallow?", "African or European?", "333mph"],
        answer: "African or European?"
    }
];

let currentQuestionIndex = 0;

// Function displays the current question and its choices
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionEl = document.getElementById("question");
    const choice1El = document.getElementById("choice1");
    const choice2El = document.getElementById("choice2");
    const choice3El = document.getElementById("choice3");
    const choice4El = document.getElementById("choice4");

    questionEl.textContent = currentQuestion.question;
    choice1El.textContent = currentQuestion.choices[0];
    choice2El.textContent = currentQuestion.choices[1];
    choice3El.textContent = currentQuestion.choices[2];
    choice4El.textContent = currentQuestion.choices[3];
}
// Function handles a user's answer to the current question
function handleAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {

        score++;
        displayScore.textContent = `Your Final Score is ${score}`;
        // Add the "show" class to the element
        correctAnswer.className = 'show';

        // Set a timer to remove the "show" class after 5 seconds
        setTimeout(function () {
            correctAnswer.className = 'hide';
        }, 2000);
        console.log("Correct!");
    } else {
        timeLeft -= 10;
        incorrectAnswer.className = 'show';

        // Set a timer to  remove the "show" class after 5 seconds
        setTimeout(function () {
            incorrectAnswer.className = 'hide';
        }, 2000);
        console.log("Incorrect!");

    }
    timerHtml = document.getElementById('timer-html');
    // Move to the next question
    currentQuestionIndex++;

    // If there are no more questions, end the quiz
    if (currentQuestionIndex === questions.length) {
        setTimeout(function () {
            quizHide.className = "hide";
            yourFinalScore.className = 'quiz-flexbox-attritbutes';
            countdown.textContent = 'The duration has ended!';
            headerFlexbox.classList.add('hide-display')
            console.log("Quiz complete!");
        }, 2000);

    } else {
        // Display the next question
        setTimeout(function () {
            displayQuestion();
        }, 2000);
    }
}

// Add event listeners to the answer buttons
const choice1Btn = document.getElementById("b1");
const choice2Btn = document.getElementById("b2");
const choice3Btn = document.getElementById("b3");
const choice4Btn = document.getElementById("b4");

choice1Btn.addEventListener("click", () => handleAnswer(questions[currentQuestionIndex].choices[0]));
choice2Btn.addEventListener("click", () => handleAnswer(questions[currentQuestionIndex].choices[1]));
choice3Btn.addEventListener("click", () => handleAnswer(questions[currentQuestionIndex].choices[2]));
choice4Btn.addEventListener("click", () => handleAnswer(questions[currentQuestionIndex].choices[3]));

// Display the first question
displayQuestion();

function saveInput() {
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;

    // Get the current high scores from local storage
    let highscorez = JSON.parse(localStorage.getItem("highscorez"));

    // If there are no existing high scores, create an empty array
    if (!highscorez) {
        highscorez = [];
    }

    // Add the new high score to the array
    highscorez.push({ name: inputValue, score: score });
    highscorez.sort((a, b) => b.score - a.score);
    // Save the updated high scores back to local storage
    localStorage.setItem("highscorez", JSON.stringify(highscorez));
    highscorez.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.score}`;
        leaderBoard.appendChild(li);
    });
}

let highscorez = JSON.parse(localStorage.getItem("highscorez"));

clearButton.addEventListener("click", function () {
    localStorage.clear();
});
