const domain1Questions = require('./generatedQuestions_domain1');
const domain2Questions = require('./generatedQuestions_domain2');
const domain3Questions = require('./generatedQuestions_domain3');
const domain4Questions = require('./generatedQuestions_domain4');
const domain5Questions = require('./generatedQuestions_domain5');
const domain6Questions = require('./generatedQuestions_domain6');

const allQuestions = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
  ...domain5Questions,
  ...domain6Questions,
];

// Function to shuffle the questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomize the questions
const randomizedQuestions = shuffleArray(allQuestions);

// Export the randomized questions for use in the quiz application
module.exports = randomizedQuestions;