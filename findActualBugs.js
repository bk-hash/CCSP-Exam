const fs = require('fs');
const path = require('path');

function analyzeQuestion(question, index, domain) {
    const issues = [];
    
    // Extract the explanation content after "The correct answer is"
    const explanationMatch = question.explanation.match(/The correct answer is ([A-D])\./);
    if (explanationMatch) {
        const explanationAnswer = explanationMatch[1];
        
        // If explanation says the answer is different from correctAnswer field
        if (explanationAnswer !== question.correctAnswer) {
            issues.push({
                type: 'ANSWER_MISMATCH',
                domain: domain,
                questionIndex: index + 1,
                question: question.question.substring(0, 80) + "...",
                correctAnswerField: question.correctAnswer,
                explanationAnswer: explanationAnswer,
                severity: 'HIGH'
            });
        }
    }
    
    // Look for explanations that explain why a different option is correct
    const explanationText = question.explanation.toLowerCase();
    
    // Check if explanation mentions option letters and explains them as correct
    const optionMatches = explanationText.match(/option ([a-d])/g);
    if (optionMatches) {
        optionMatches.forEach(match => {
            const letter = match.match(/option ([a-d])/)[1].toUpperCase();
            if (letter !== question.correctAnswer) {
                // Check if this is explaining why this option is correct
                const context = explanationText.substring(
                    explanationText.indexOf(match) - 50,
                    explanationText.indexOf(match) + 100
                );
                
                if (context.includes('correct') || context.includes('right') || context.includes('best')) {
                    issues.push({
                        type: 'EXPLANATION_CONTRADICTION',
                        domain: domain,
                        questionIndex: index + 1,
                        question: question.question.substring(0, 80) + "...",
                        correctAnswerField: question.correctAnswer,
                        explanationMentions: letter,
                        context: context,
                        severity: 'MEDIUM'
                    });
                }
            }
        });
    }
    
    return issues;
}

function checkDomain(filename) {
    const filePath = path.join(__dirname, 'src', 'questions', filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filename}`);
        return [];
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract questions array
    const questionsMatch = content.match(/const\s+\w+\s*=\s*(\[[\s\S]*?\]);/);
    if (!questionsMatch) {
        console.log(`❌ Could not parse questions from ${filename}`);
        return [];
    }
    
    let questions;
    try {
        questions = eval(questionsMatch[1]);
    } catch (error) {
        console.log(`❌ Error parsing questions from ${filename}: ${error.message}`);
        return [];
    }
    
    console.log(`📁 Checking ${filename} (${questions.length} questions)...`);
    
    const issues = [];
    questions.forEach((question, index) => {
        const questionIssues = analyzeQuestion(question, index, filename);
        issues.push(...questionIssues);
    });
    
    return issues;
}

console.log('=== Finding Actual Answer/Explanation Bugs ===');

const domains = ['domain1.js', 'domain2.js', 'domain3.js', 'domain4.js', 'domain5.js', 'domain6.js'];
let allIssues = [];

domains.forEach(domain => {
    const issues = checkDomain(domain);
    allIssues.push(...issues);
});

console.log('\n=== ACTUAL BUGS FOUND ===');

// Group by severity
const highSeverity = allIssues.filter(issue => issue.severity === 'HIGH');
const mediumSeverity = allIssues.filter(issue => issue.severity === 'MEDIUM');

console.log(`\n🚨 HIGH SEVERITY BUGS (${highSeverity.length}):`);
highSeverity.forEach(issue => {
    console.log(`\n${issue.domain} Question ${issue.questionIndex}:`);
    console.log(`   Question: "${issue.question}"`);
    console.log(`   correctAnswer field: ${issue.correctAnswerField}`);
    console.log(`   Explanation says: ${issue.explanationAnswer}`);
    console.log(`   ❌ MISMATCH: Answer field doesn't match explanation!`);
});

console.log(`\n⚠️  MEDIUM SEVERITY ISSUES (${mediumSeverity.length}):`);
mediumSeverity.forEach(issue => {
    console.log(`\n${issue.domain} Question ${issue.questionIndex}:`);
    console.log(`   Question: "${issue.question}"`);
    console.log(`   correctAnswer field: ${issue.correctAnswerField}`);
    console.log(`   Explanation mentions option: ${issue.explanationMentions}`);
    console.log(`   Context: "${issue.context}"`);
});

console.log(`\n=== SUMMARY ===`);
console.log(`High severity bugs (need immediate fix): ${highSeverity.length}`);
console.log(`Medium severity issues (need review): ${mediumSeverity.length}`);
console.log(`Total issues requiring attention: ${allIssues.length}`);

if (highSeverity.length > 0) {
    console.log(`\n🔥 CRITICAL: ${highSeverity.length} questions have answer/explanation mismatches that will confuse users!`);
} else {
    console.log(`\n✅ No critical answer/explanation mismatches found!`);
}
