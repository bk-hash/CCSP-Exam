const fs = require('fs');
const path = require('path');

// Load domain5 questions
const domain5Path = path.join(__dirname, 'src', 'questions', 'domain5.js');
const content = fs.readFileSync(domain5Path, 'utf8');

// Extract questions array
const questionsMatch = content.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
const questions = eval(questionsMatch[1]);

// Find the VLAN question (question 41)
const vlanQuestion = questions[40]; // 0-indexed, so 40 = question 41

console.log('=== VLAN Question Analysis ===');
console.log(`Question ${41}: ${vlanQuestion.question}`);
console.log('\nOptions:');
vlanQuestion.options.forEach((option, index) => {
    console.log(`  ${option}`);
});

console.log(`\nCorrect Answer (according to correctAnswer field): ${vlanQuestion.correctAnswer}`);
console.log(`Selected Option: ${vlanQuestion.options.find(opt => opt.startsWith(vlanQuestion.correctAnswer + '. '))}`);

console.log(`\nExplanation: ${vlanQuestion.explanation}`);

console.log('\n=== Analysis ===');
console.log('This is a NEGATIVE question asking "Which is NOT a characteristic"');
console.log('The explanation states "Option B is not a characteristic of VLANs"');
console.log('Therefore, B should be the correct answer for this negative question.');

console.log('\n=== Verification ===');
if (vlanQuestion.correctAnswer === 'B') {
    console.log('✅ CORRECT: The correctAnswer field (B) matches the explanation');
    console.log('✅ The quiz logic should work correctly for this question');
} else {
    console.log('❌ BUG: The correctAnswer field does not match the explanation');
}

// Test what happens in a quiz scenario
console.log('\n=== Quiz Simulation ===');
console.log('If a user selects option B (the correct answer):');
const userAnswer = 'B';
const isCorrect = userAnswer === vlanQuestion.correctAnswer;
console.log(`User selection: ${userAnswer}`);
console.log(`Quiz result: ${isCorrect ? 'CORRECT ✅' : 'INCORRECT ❌'}`);
