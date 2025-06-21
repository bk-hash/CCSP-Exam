// filepath: /js-quiz-app/js-quiz-app/src/app.js

import { loadQuestions } from './questions/questions.js';
import { startTimer, stopTimer } from './timer.js';
import { startQuiz, handleUserAnswer } from './quiz.js';
import { startPracticeMode } from './practiceMode.js';

const app = (() => {
    let isTimedQuiz = false;

    const init = () => {
        document.getElementById('start-quiz').addEventListener('click', startQuizHandler);
        document.getElementById('start-practice').addEventListener('click', startPracticeHandler);
    };

    const startQuizHandler = () => {
        isTimedQuiz = true; // Set to true for timed quiz
        loadQuestions();
        startTimer(60); // Start timer for 60 seconds
        startQuiz();
    };

    const startPracticeHandler = () => {
        isTimedQuiz = false; // Set to false for practice mode
        loadQuestions();
        startPracticeMode();
    };

    const handleAnswer = (answer) => {
        handleUserAnswer(answer);
        if (isTimedQuiz) {
            // Additional logic for timed quiz if needed
        }
    };

    return {
        init,
        handleAnswer,
    };
})();

document.addEventListener('DOMContentLoaded', app.init);