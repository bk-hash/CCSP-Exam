// filepath: /js-quiz-app/js-quiz-app/src/quiz.js

const questions = require('./questions/questions');

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;

function loadQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const question = questions[currentQuestionIndex];
        displayQuestion(question);
    } else {
        endQuiz();
    }
}

function displayQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <button class="option" onclick="checkAnswer('${question.correctAnswer}', '${option}')">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(correctAnswer, selectedOption) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <h2>Your Score: ${score} out of ${totalQuestions}</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

module.exports = {
    loadQuestion,
    checkAnswer,
    endQuiz,
    restartQuiz,
};