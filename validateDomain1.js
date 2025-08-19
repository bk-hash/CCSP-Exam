const fs = require('fs');
const path = require('path');

// Function to extract and validate domain 1 questions
function validateDomain1() {
  const filePath = path.join(__dirname, 'src', 'questions', 'domain1.js');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments and clean up
    let cleanContent = content
      .replace(/\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Find the questions array
    const arrayMatch = cleanContent.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
    if (!arrayMatch) {
      console.log('❌ No questions array found in domain1.js');
      return;
    }
    
    let questionsStr = arrayMatch[1];
    questionsStr = questionsStr.replace(/,(\s*[}\]])/g, '$1');
    
    let questions;
    try {
      questions = JSON.parse(questionsStr);
    } catch (parseError) {
      try {
        questions = eval(questionsStr);
      } catch (evalError) {
        console.error('Failed to parse domain1.js questions:', parseError.message);
        return;
      }
    }
    
    console.log(`=== Domain 1 Detailed Validation ===`);
    console.log(`Found ${questions.length} questions\n`);
    
    let issuesFound = 0;
    
    questions.forEach((question, index) => {
      const questionNum = index + 1;
      
      // Check basic structure
      if (!question.question) {
        console.log(`❌ Question ${questionNum}: Missing question text`);
        issuesFound++;
      }
      
      if (!question.options || !Array.isArray(question.options)) {
        console.log(`❌ Question ${questionNum}: Missing or invalid options array`);
        issuesFound++;
        return;
      }
      
      // Check options count
      if (question.options.length !== 4) {
        console.log(`❌ Question ${questionNum}: Has ${question.options.length} options instead of 4`);
        console.log(`   Question: "${question.question ? question.question.substring(0, 60) : 'N/A'}..."`);
        console.log(`   Options: ${JSON.stringify(question.options, null, 2)}`);
        issuesFound++;
      }
      
      // Check option labeling
      const expectedLabels = ['A', 'B', 'C', 'D'];
      for (let i = 0; i < question.options.length && i < 4; i++) {
        const option = question.options[i];
        const expectedPrefix = `${expectedLabels[i]}. `;
        
        if (!option || !option.startsWith(expectedPrefix)) {
          console.log(`❌ Question ${questionNum}: Option ${i + 1} should start with "${expectedPrefix}"`);
          console.log(`   Found: "${option ? option.substring(0, 30) : 'undefined'}..."`);
          issuesFound++;
        }
      }
      
      // Check correct answer
      if (!question.correctAnswer) {
        console.log(`❌ Question ${questionNum}: Missing correctAnswer`);
        issuesFound++;
      } else if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) {
        console.log(`❌ Question ${questionNum}: Invalid correctAnswer "${question.correctAnswer}"`);
        issuesFound++;
      } else {
        // Check if correct answer corresponds to existing option
        const correctIndex = question.correctAnswer.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
        if (correctIndex >= question.options.length) {
          console.log(`❌ Question ${questionNum}: correctAnswer "${question.correctAnswer}" doesn't match available options (only ${question.options.length} options)`);
          console.log(`   Question: "${question.question ? question.question.substring(0, 60) : 'N/A'}..."`);
          issuesFound++;
        }
      }
      
      // Check for duplicates
      if (question.options.length >= 2) {
        const optionTexts = question.options.map(opt => opt ? opt.substring(3).trim().toLowerCase() : '');
        const uniqueOptions = new Set(optionTexts.filter(opt => opt.length > 0));
        if (uniqueOptions.size !== optionTexts.filter(opt => opt.length > 0).length) {
          console.log(`❌ Question ${questionNum}: Duplicate options detected`);
          console.log(`   Options: ${JSON.stringify(question.options, null, 2)}`);
          issuesFound++;
        }
      }
      
      // Check for empty options
      const emptyOptions = question.options.filter(opt => !opt || opt.trim().length <= 3);
      if (emptyOptions.length > 0) {
        console.log(`❌ Question ${questionNum}: ${emptyOptions.length} empty or invalid options`);
        console.log(`   Question: "${question.question ? question.question.substring(0, 60) : 'N/A'}..."`);
        console.log(`   Options: ${JSON.stringify(question.options, null, 2)}`);
        issuesFound++;
      }
    });
    
    console.log(`\n=== Summary ===`);
    if (issuesFound === 0) {
      console.log(`✅ Domain 1: All ${questions.length} questions are valid!`);
    } else {
      console.log(`❌ Domain 1: Found ${issuesFound} issues across ${questions.length} questions`);
    }
    
  } catch (error) {
    console.error('Error processing domain1.js:', error.message);
  }
}

validateDomain1();
