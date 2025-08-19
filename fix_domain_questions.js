const fs = require('fs');
const path = require('path');

// Function to convert questions format
function convertQuestions(filePath) {
  console.log(`Processing ${filePath}...`);
  
  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Parse the JavaScript file content to extract questions
  const questionsMatch = content.match(/const questions = \[([\s\S]*)\];/);
  if (!questionsMatch) {
    console.log('No questions array found');
    return;
  }
  
  // Use eval to parse the questions (careful approach)
  const questionsCode = questionsMatch[1];
  let questions;
  try {
    questions = eval(`[${questionsCode}]`);
  } catch (e) {
    console.error('Error parsing questions:', e);
    return;
  }
  
  // Convert each question
  const convertedQuestions = questions.map(q => {
    if (q.answer && !q.correctAnswer) {
      // Find which option matches the answer
      const correctIndex = q.options.findIndex(opt => opt === q.answer);
      if (correctIndex === -1) {
        console.warn(`Could not find answer "${q.answer}" in options for question: ${q.question.substring(0, 50)}...`);
        return q;
      }
      
      // Convert options to lettered format
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const newOptions = q.options.map((opt, index) => `${letters[index]}. ${opt}`);
      
      // Create new question object
      return {
        question: q.question,
        options: newOptions,
        correctAnswer: letters[correctIndex],
        explanation: q.explanation || `The correct answer is ${q.answer}.`,
        domain: q.domain || "Cloud Security Operations"
      };
    }
    return q;
  });
  
  // Generate new file content
  const newContent = `const questions = ${JSON.stringify(convertedQuestions, null, 2)};

export default questions;
`;
  
  // Write back to file
  fs.writeFileSync(filePath, newContent);
  console.log(`Fixed ${filePath}`);
}

// Process domain5 and domain6 files
const domain5Path = path.join(__dirname, 'src', 'questions', 'domain5.js');
const domain6Path = path.join(__dirname, 'src', 'questions', 'domain6.js');

convertQuestions(domain5Path);
convertQuestions(domain6Path);

console.log('Conversion complete!');
