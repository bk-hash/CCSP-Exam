import { questions } from './questions/questions.js';

const practiceMode = () => {
    let currentQuestionIndex = 0;
    let score = 0;

    const loadQuestion = () => {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            displayQuestion(question);
        } else {
            displayResults();
        }
    };

    const displayQuestion = (question) => {
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.options.map((option, index) => `
                    <li>
                        <button onclick="handleAnswer('${option}', '${question.correctAnswer}')">${option}</button>
                    </li>
                `).join('')}
            </ul>
        `;
    };

    const handleAnswer = (selectedOption, correctAnswer) => {
        if (selectedOption === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    };

    const displayResults = () => {
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = `
            <h2>Your Score: ${score} out of ${questions.length}</h2>
            <button onclick="restartPractice()">Restart Practice</button>
        `;
    };

    const restartPractice = () => {
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    };

    return {
        start: loadQuestion,
    };
};

const practice = practiceMode();
practice.start();