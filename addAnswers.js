// addAnswers.js
// Adds an explicit 'answer' property to each question in Domain 5 and 6 files

const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '../generatedQuestions_domain5.js'),
  path.join(__dirname, '../generatedQuestions_domain6.js'),
];



files.forEach((file) => {
  let data = fs.readFileSync(file, 'utf8');
  // Try to find the array of questions (supporting export, module.exports, and various whitespace)
  let match = data.match(/(export\s+)?(const|let|var)\s+\w+\s*=\s*(\[.*?\]);/s);
  let arrText, prefix, suffix;
  if (match) {
    arrText = match[3];
    prefix = data.slice(0, match.index) + match[0].replace(arrText, '');
    suffix = data.slice(match.index + match[0].length);
  } else {
    // Try module.exports = [ ... ];
    match = data.match(/module\.exports\s*=\s*(\[.*?\]);/s);
    if (match) {
      arrText = match[1];
      prefix = data.slice(0, match.index) + 'module.exports = ';
      suffix = data.slice(match.index + match[0].length);
    } else {
      console.error(`Could not find questions array in ${file}`);
      return;
    }
  }
  let questions;
  try {
    questions = eval(arrText); // Use eval to parse the array
  } catch (e) {
    console.error(`Failed to parse questions array in ${file}`);
    return;
  }



  // Clean, relabel options, and set 'answer' property for each question
  questions = questions.map((q, idx) => {
    if (Array.isArray(q.options)) {
      // Remove non-string, empty, or duplicate options
      let seen = new Set();
      q.options = q.options
        .filter(opt => typeof opt === 'string' && opt.trim() !== '')
        .map(opt => opt.replace(/^[A-Da-d]\.[ ]*/, ''))
        .filter(opt => {
          if (seen.has(opt)) return false;
          seen.add(opt);
          return true;
        });
      // Limit to 2-6 options
      q.options = q.options.slice(0, 6);
      // Relabel
      q.options = q.options.map((opt, i) => String.fromCharCode(65 + i) + '. ' + opt);
      // Set answer property to the correct labeled option
      if (q.correctAnswer) {
        const idx = q.correctAnswer.charCodeAt(0) - 65;
        q.answer = q.options[idx] || '';
        // If correctAnswer is out of range, log for review
        if (!q.answer) {
          console.warn(`Question ${idx + 1}: correctAnswer '${q.correctAnswer}' out of range. Options:`, q.options);
        }
      }
      // If options < 2, log for review
      if (q.options.length < 2) {
        console.warn(`Question ${idx + 1}: fewer than 2 options.`, q);
      }
    }
    return q;
  });

  // Replace the array in the file
  const newArrText = JSON.stringify(questions, null, 2);
  const newData = prefix + newArrText + ';' + suffix;
  fs.writeFileSync(file, newData, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('Done.');
