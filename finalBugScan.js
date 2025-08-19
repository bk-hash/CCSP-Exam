const fs = require('fs');
const path = require('path');

function findAnswerMismatches(filename) {
    const filePath = path.join(__dirname, 'src', 'questions', filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filename}`);
        return [];
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract questions array
    const questionsMatch = content.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
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
    
    const bugs = [];
    
    questions.forEach((question, index) => {
        const questionNum = index + 1;
        const explanation = question.explanation.toLowerCase();
        
        // Look for explicit statements about which option is correct
        const patterns = [
            /the correct answer is ([a-d])\b/i,
            /option ([a-d]) is correct/i,
            /answer: ([a-d])\b/i,
            /correct option is ([a-d])/i,
            /option ([a-d]) is the correct/i
        ];
        
        let explanationAnswer = null;
        
        for (const pattern of patterns) {
            const match = question.explanation.match(pattern);
            if (match) {
                explanationAnswer = match[1].toUpperCase();
                break;
            }
        }
        
        // If we found an explicit answer in explanation, check if it matches
        if (explanationAnswer && explanationAnswer !== question.correctAnswer) {
            bugs.push({
                file: filename,
                questionNum: questionNum,
                question: question.question.substring(0, 100) + "...",
                currentAnswer: question.correctAnswer,
                explanationAnswer: explanationAnswer,
                explanation: question.explanation
            });
        }
        
        // Also check for logical contradictions - if explanation describes why the current answer is wrong
        const currentOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
        if (currentOption) {
            const optionText = currentOption.substring(3).toLowerCase();
            
            // Check if explanation says this option is wrong/bad/incorrect
            const wrongIndicators = ['incorrect', 'wrong', 'bad practice', 'insecure', 'vulnerable', 'not recommended'];
            const hasWrongIndicator = wrongIndicators.some(indicator => 
                explanation.includes(indicator) && explanation.includes(optionText.substring(0, 20))
            );
            
            if (hasWrongIndicator) {
                bugs.push({
                    file: filename,
                    questionNum: questionNum,
                    question: question.question.substring(0, 100) + "...",
                    currentAnswer: question.correctAnswer,
                    explanationAnswer: "CONTRADICTION",
                    explanation: question.explanation,
                    type: "LOGICAL_CONTRADICTION"
                });
            }
        }
    });
    
    return bugs;
}

console.log('=== Finding Answer/Explanation Mismatches ===\n');

const domains = ['domain1.js', 'domain2.js', 'domain3.js', 'domain4.js', 'domain5.js', 'domain6.js'];
let allBugs = [];

domains.forEach(domain => {
    const bugs = findAnswerMismatches(domain);
    allBugs.push(...bugs);
});

console.log('\n=== BUGS FOUND ===\n');

if (allBugs.length === 0) {
    console.log('✅ No answer/explanation mismatches found!');
} else {
    allBugs.forEach((bug, index) => {
        console.log(`🚨 BUG ${index + 1}: ${bug.file} Question ${bug.questionNum}`);
        console.log(`   Question: "${bug.question}"`);
        console.log(`   Current Answer: ${bug.currentAnswer}`);
        if (bug.type === "LOGICAL_CONTRADICTION") {
            console.log(`   Issue: Explanation contradicts current answer`);
        } else {
            console.log(`   Explanation Says: ${bug.explanationAnswer}`);
        }
        console.log(`   Explanation: "${bug.explanation.substring(0, 150)}..."`);
        console.log('');
    });
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total bugs found: ${allBugs.length}`);

if (allBugs.length > 0) {
    console.log(`\nDomains affected:`);
    const domainCounts = {};
    allBugs.forEach(bug => {
        domainCounts[bug.file] = (domainCounts[bug.file] || 0) + 1;
    });
    
    Object.entries(domainCounts).forEach(([domain, count]) => {
        console.log(`  ${domain}: ${count} bug(s)`);
    });
}
