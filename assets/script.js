startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');
quizzzBox = document.querySelector('.quiz-box');
mainBox = document.getElementById("main-box");
yourFinalScore = document.getElementById("your-final-score");
displayScore = document.querySelector('.display-score');
header = document.querySelector('header');
highscoresList = document.getElementById("highscores");

quizHide = document.querySelector(".flex");


let timer;
let timeLeft = " " + 60;
let score = 0;


quizFlexbox = document.getElementById('quiz-flexbox');
quizFlexbox.className ="hide";

backButton = document.getElementById("back-button");
backButton.addEventListener("click", startOver);

function startOver () {
        highscoresList.className = 'hide';
        header.className = 'header-flex-margin';
        mainBox.className = "quiz-flexbox-attritbutes";

}

submitScoreButton= document.getElementById("submit-score");
submitScoreButton.addEventListener("click", displayHighscorez);

function displayHighscorez() {
        yourFinalScore.className = 'hide';
        header.className = 'hide';
        highscoresList.className = 'show';

}



function displayQuiz() {
    quizSelector.className = 'quiz-flexbox-attritbutes';
}

startButton.addEventListener("click", displayQuiz);
startButton.addEventListener("click", hideMainBox);
startButton.addEventListener("click", function() {
  quizFlexbox.className ="flex";
    timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = "" + timeLeft;

        if (timeLeft <= 0 && highscoresList.className === 'hide') {
            yourFinalScore.className = 'quiz-flexbox-attritbutes';
            quizFlexbox.className ="hide";
            clearInterval(timer);
            countdown.textContent = ' Time is up!';
            quizSelector.className = 'hide';
            displayScore.textContent = `Your Final Score is: ${score}`;
        }
 }, 1000);
});


// Reset the time limit to 60 seconds
backButton.addEventListener("click", function() {
    clearInterval(timer);
    timeLeft = 60; 
    countdown.textContent = "" + timeLeft;
  });



function hideMainBox() {
    mainBox.className = "hide";
  };







  // questions
const questions = [
    {
      question: "What does JSON mean?",
      choices: ["Cascading Style Sheets", "Java", "JavaScript Object Notation", "Jabba the hutt"],
      answer: "JavaScript Object Notation"
    },
    {
      question: "In JS what is this: ${...}",
      choices: ["It's a variable", "A Template Literal", "A string", "A function"],
      answer: "A Template Literal"
    },
    {
      question: "What does clearInterval() do?",
      choices: ["Cancels a timer", "Clears the console", "Clears Terminal", "Nothing"],
      answer: "Cancels a timer"
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
      displayScore.textContent = `Your Final Score is: ${score}`;
      console.log("Correct!");
    } else {
      timeLeft -= 10;
      console.log("Incorrect!");
    }
  
    // Move to the next question
    currentQuestionIndex++;
  
    // If there are no more questions, end the quiz
    if (currentQuestionIndex === questions.length) {
      quizHide.className = "hide";
      yourFinalScore.className = 'quiz-flexbox-attritbutes';
      
      console.log("Quiz complete!");
    } else {
      // Display the next question
      displayQuestion();
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
  highscorez.push({name: inputValue, score: score});

  // Save the updated high scores back to local storage
  localStorage.setItem("highscorez", JSON.stringify(highscorez));
}

function loadInput() {
  // Get the high scores from local storage
  let highscorez = JSON.parse(localStorage.getItem("highscorez"));

  // If there are no high scores, create an empty array
  if (!highscorez) {
    highscorez = [];
  }
// Assuming the highscores array exists and contains objects with 'name' and 'score' properties
leaderBoard = document.getElementById("highscore-paragraph-ele");

// Loop through the highscores array and create a new list item for each object
highscorez.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = `${item.name}: ${item.score}`;
  leaderBoard.appendChild(li);
});

  // Log the high scores to the console
  console.log(highscorez);
}






  





