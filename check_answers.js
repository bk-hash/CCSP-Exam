const fs = require('fs');

// Function to extract questions and check for inconsistencies
function checkQuestions(filePath) {
  console.log(`\n=== Checking ${filePath} ===`);
  
  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract questions using regex
    const questionMatches = content.matchAll(/{\s*question:\s*"([^"]+)"[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctAnswer:\s*"([A-D])"[\s\S]*?explanation:\s*"([^"]+)"/g);
    
    let issues = [];
    let questionNum = 0;
    
    for (const match of questionMatches) {
      questionNum++;
      const [fullMatch, question, optionsText, correctAnswer, explanation] = match;
      
      // Extract individual options
      const optionMatches = optionsText.matchAll(/"([A-D]\.[^"]+)"/g);
      const options = Array.from(optionMatches, m => m[1]);
      
      // Find the correct option text
      const correctOption = options.find(opt => opt.startsWith(correctAnswer + '.'));
      
      if (!correctOption) {
        issues.push({
          questionNum,
          question: question.substring(0, 60) + '...',
          correctAnswer,
          issue: 'No option found matching correct answer letter',
          explanation
        });
        continue;
      }
      
      const correctText = correctOption.substring(3).trim(); // Remove "A. " prefix
      
      // Check for common mismatch patterns
      const explanationLower = explanation.toLowerCase();
      const correctTextLower = correctText.toLowerCase();
      
      // Look for explanations that mention other answer choices
      const otherLetters = ['A', 'B', 'C', 'D'].filter(l => l !== correctAnswer);
      const mentionsOtherAnswer = otherLetters.some(letter => {
        const pattern = new RegExp(`\\b${letter}\\b.*(?:correct|answer|right)`, 'i');
        return pattern.test(explanation);
      });
      
      if (mentionsOtherAnswer) {
        issues.push({
          questionNum,
          question: question.substring(0, 60) + '...',
          correctAnswer,
          correctText,
          explanation,
          issue: 'Explanation mentions another answer letter as correct'
        });
      }
      
      // Check if explanation contradicts the selected answer
      if (explanationLower.includes('incorrect') && explanationLower.includes(correctTextLower.substring(0, 10))) {
        issues.push({
          questionNum,
          question: question.substring(0, 60) + '...',
          correctAnswer,
          correctText,
          explanation,
          issue: 'Explanation seems to contradict the correct answer'
        });
      }
    }
    
    if (issues.length === 0) {
      console.log('✅ No issues found!');
    } else {
      console.log(`❌ Found ${issues.length} potential issues:`);
      issues.forEach(issue => {
        console.log(`\n  Question ${issue.questionNum}: ${issue.question}`);
        console.log(`  Correct Answer: ${issue.correctAnswer}`);
        if (issue.correctText) console.log(`  Option Text: ${issue.correctText}`);
        console.log(`  Issue: ${issue.issue}`);
        console.log(`  Explanation: ${issue.explanation.substring(0, 100)}...`);
      });
    }
    
    return issues;
    
  } catch (error) {
    console.log(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Check all domain files
const files = [
  'src/questions/domain1.js',
  'src/questions/domain2.js',
  'src/questions/domain3.js', 
  'src/questions/domain4.js',
  'src/questions/domain5.js',
  'src/questions/domain6.js'
];

let totalIssues = 0;
files.forEach(file => {
  const issues = checkQuestions(file);
  totalIssues += issues.length;
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total potential issues found: ${totalIssues}`);
