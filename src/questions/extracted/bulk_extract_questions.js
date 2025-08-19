// Bulk extraction script for CCSP .txt files
// Usage: node bulk_extract_questions.js
// Output: questions_bulk_extracted.js

const fs = require('fs');
const path = require('path');

const sources = [
  path.join(__dirname, '../../Documents/CCSP Practice Tests.txt'),
  path.join(__dirname, '../../Documents/test practice.txt')
];

function cleanLine(line) {
  return line.replace(/\s+/g, ' ').trim();
}

function parseQuestions(text) {
  // Split into blocks by question number (e.g., "104.", "1.")
  const blocks = text.split(/\n\s*\d{1,4}[\.\s]/).filter(b => b.trim().length > 0);
  const questions = [];
  let match;
  // Find all question numbers for block alignment
  const qnums = [...text.matchAll(/\n\s*(\d{1,4})[\.\s]/g)].map(m => m[1]);
  blocks.forEach((block, idx) => {
    // Find options (A., B., C., D.)
    const optionMatches = [...block.matchAll(/([A-D])\.\s([^\n]+)/g)];
    const options = optionMatches.map(m => `${m[1]}. ${m[2].trim()}`);
    // Question text: everything before first option
    let qtext = block.split(/A\.\s/)[0].replace(/\s+/g, ' ').trim();
    // Correct answer: look for a line with just a letter, or default to first option
    let correctAnswer = '';
    match = block.match(/\n([A-D])\s*\n/);
    if (match) {
      correctAnswer = match[1];
    } else if (options.length > 0) {
      correctAnswer = options[0][0];
    }
    // Domain: try to find in block or use question number alignment
    let domain = '';
    match = block.match(/Domain \d+/);
    if (match) {
      domain = match[0];
    } else if (qnums[idx]) {
      domain = 'Unknown';
    }
    // Explanation: not available, leave blank
    if (qtext && options.length > 0) {
      questions.push({
        question: qtext,
        options,
        correctAnswer,
        explanation: '',
        domain,
        type: 'multiple-choice',
        difficulty: 'medium'
      });
    }
  });
  return questions;
}

let allQuestions = [];
sources.forEach(src => {
  if (fs.existsSync(src)) {
    const text = fs.readFileSync(src, 'utf8');
    const qs = parseQuestions(text);
    allQuestions = allQuestions.concat(qs);
  }
});

// Output to JS file
const outPath = path.join(__dirname, 'questions_bulk_extracted.js');
fs.writeFileSync(outPath, 'const questions = ' + JSON.stringify(allQuestions, null, 2) + ';\n\nexport default questions;\n');

console.log(`Extracted ${allQuestions.length} questions to questions_bulk_extracted.js`);
