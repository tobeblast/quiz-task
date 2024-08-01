"use strict";

const quiz = [
  {
    question: "What year did Nigeria gain her independence ?",
    options: [
      "1st October 1960",
      "1st August 1990",
      "1st January 1980",
      "22nd December 1970",
    ],
    correctAnswer: "1st October 1960",
  },
  {
    question: "What is the official name of js ",
    options: ["JavaScript", "XmaScript", "ECMAScript", "Python"],
    correctAnswer: "ECMAScript",
  },
  {
    question: "What is the name of frontend tutor in kodecamp 4.0 ?",
    options: ["Ikeys", "Phemmyblaze", "Imoleayo Bisiolu", "Mr Tokunbo"],
    correctAnswer: "Phemmyblaze",
  },
  {
    question: "What is 2 * 3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "6",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionArea = document.getElementById("question-area");
  const optionsArea = document.getElementById("options-area");
  const message = document.getElementById("message");

  // Clear previous options and message
  optionsArea.innerHTML = "";
  message.textContent = "";

  // Display the current question
  const currentQuestion = quiz[currentQuestionIndex];
  questionArea.textContent = currentQuestion.question;

  // Display the answer options
  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    li.appendChild(button);
    optionsArea.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quiz[currentQuestionIndex];
  const message = document.getElementById("message");
  const scoreDisplay = document.getElementById("score");

  if (selectedOption === currentQuestion.correctAnswer) {
    message.textContent = "Correct!";
    score++;
  } else {
    message.textContent = "Wrong!";
  }

  // Update score display
  scoreDisplay.textContent = `Score: ${score}`;

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    setTimeout(displayQuestion, 1000); // Display next question after 1 second
  } else {
    setTimeout(displayFinalScore, 1000); // Display final score after 1 second
  }
}

function displayFinalScore() {
  const questionArea = document.getElementById("question-area");
  const optionsArea = document.getElementById("options-area");
  const message = document.getElementById("message");

  // Clear previous content
  questionArea.textContent = "";
  optionsArea.innerHTML = "";
  message.textContent = "";

  // Display final score
  const finalScore = document.createElement("div");
  finalScore.textContent = `Final Score: ${score} out of ${quiz.length}`;
  document.getElementById("quiz-container").appendChild(finalScore);
}

// Initialize quiz
displayQuestion();
