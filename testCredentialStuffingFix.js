const fs = require('fs');
const path = require('path');

// Load domain1 questions
const domain1Path = path.join(__dirname, 'src', 'questions', 'domain1.js');
const content = fs.readFileSync(domain1Path, 'utf8');

// Extract questions array
const questionsMatch = content.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
const questions = eval(questionsMatch[1]);

// Find the specific question from the screenshot
const credentialStuffingQuestion = questions.find(q => 
    q.question.includes("multi-cloud API gateway") && 
    q.question.includes("credential stuffing")
);

if (credentialStuffingQuestion) {
    console.log('=== CREDENTIAL STUFFING QUESTION TEST ===');
    console.log(`Question: ${credentialStuffingQuestion.question}`);
    console.log('\nOptions:');
    credentialStuffingQuestion.options.forEach((option, index) => {
        const marker = option.startsWith(credentialStuffingQuestion.correctAnswer + '.') ? ' ← CORRECT' : '';
        console.log(`  ${option}${marker}`);
    });
    
    console.log(`\nCorrect Answer: ${credentialStuffingQuestion.correctAnswer}`);
    console.log(`Explanation: ${credentialStuffingQuestion.explanation}`);
    
    console.log('\n=== VERIFICATION ===');
    
    // Test the scenario from the screenshot
    const userSelectedA = 'A';
    const isCorrectNow = userSelectedA === credentialStuffingQuestion.correctAnswer;
    
    console.log(`User selects option A (Rate-limited MFA with CAPTCHA): ${isCorrectNow ? 'CORRECT ✅' : 'INCORRECT ❌'}`);
    
    if (isCorrectNow) {
        console.log('🎉 BUG FIXED! The question now works correctly.');
    } else {
        console.log('⚠️  Still has a bug - needs further investigation.');
    }
} else {
    console.log('❌ Could not find the credential stuffing question');
}

// Also check if there are any other questions with this pattern
console.log('\n=== SEARCHING FOR SIMILAR ISSUES ===');
let foundSimilar = 0;

questions.forEach((question, index) => {
    // Look for explanations that clearly state a different option is correct
    const explanation = question.explanation.toLowerCase();
    
    // Check each option to see if it's described as correct in the explanation
    ['a', 'b', 'c', 'd'].forEach(letter => {
        const patterns = [
            new RegExp(`option ${letter} (?:is )?(?:the )?correct`, 'i'),
            new RegExp(`${letter} is (?:the )?correct`, 'i'),
            new RegExp(`answer is ${letter}`, 'i')
        ];
        
        const matchesPattern = patterns.some(pattern => question.explanation.match(pattern));
        
        if (matchesPattern && letter.toUpperCase() !== question.correctAnswer) {
            foundSimilar++;
            console.log(`\n🚨 POTENTIAL BUG - Question ${index + 1}:`);
            console.log(`   Current Answer: ${question.correctAnswer}`);
            console.log(`   Explanation mentions: ${letter.toUpperCase()}`);
            console.log(`   Question: ${question.question.substring(0, 80)}...`);
        }
    });
});

console.log(`\n=== SUMMARY ===`);
console.log(`Similar issues found: ${foundSimilar}`);
