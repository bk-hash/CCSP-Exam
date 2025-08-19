const fs = require('fs');
const path = require('path');

// Function to check for answer/explanation mismatches
function findAnswerExplanationMismatches() {
  const questionsDir = path.join(__dirname, 'src', 'questions');
  const domainFiles = [
    'domain1.js',
    'domain2.js', 
    'domain3.js',
    'domain4.js',
    'domain5.js',
    'domain6.js'
  ];
  
  let totalIssues = 0;
  
  console.log('=== Checking for Answer/Explanation Mismatches ===\n');
  
  domainFiles.forEach((filename) => {
    const filePath = path.join(questionsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filename}`);
      return;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Remove comments and clean up
      let cleanContent = content
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Find the questions array
      const arrayMatch = cleanContent.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
      if (!arrayMatch) {
        console.log(`❌ No questions array found in ${filename}`);
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
          console.error(`Failed to parse ${filename}:`, parseError.message);
          return;
        }
      }
      
      console.log(`📁 Checking ${filename} (${questions.length} questions)...`);
      
      let fileIssues = 0;
      
      questions.forEach((question, index) => {
        const questionNum = index + 1;
        
        if (question.explanation && question.correctAnswer && question.options) {
          const correctOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
          
          if (correctOption) {
            const correctText = correctOption.substring(3).toLowerCase();
            const explanationLower = question.explanation.toLowerCase();
            
            // Check if explanation mentions a different option as correct
            const otherOptions = ['A', 'B', 'C', 'D'].filter(opt => opt !== question.correctAnswer);
            
            for (let otherOpt of otherOptions) {
              const otherOption = question.options.find(opt => opt.startsWith(`${otherOpt}. `));
              if (otherOption) {
                const otherText = otherOption.substring(3).toLowerCase();
                
                // Check if explanation clearly states the other option is correct
                const phrases = [
                  `${otherText} prevents`,
                  `${otherText} is the correct`,
                  `${otherText} provides`,
                  `${otherText} ensures`,
                  `${otherText} is used`,
                  `the correct answer is ${otherText}`,
                  `correct answer is ${otherText}`
                ];
                
                // Also check for key words from other options in explanation
                const otherWords = otherText.split(' ').filter(word => word.length > 5);
                const significantWords = otherWords.slice(0, 3); // First 3 significant words
                
                const foundPhrase = phrases.some(phrase => explanationLower.includes(phrase.substring(0, 30)));
                const foundSignificantWords = significantWords.length > 0 && 
                  significantWords.every(word => explanationLower.includes(word));
                
                if (foundPhrase || (foundSignificantWords && significantWords.length >= 2)) {
                  console.log(`🚨 MISMATCH FOUND - Question ${questionNum}:`);
                  console.log(`   Question: "${question.question.substring(0, 80)}..."`);
                  console.log(`   Marked Correct: ${question.correctAnswer}. ${correctOption.substring(3)}`);
                  console.log(`   Explanation mentions: ${otherOpt}. ${otherOption.substring(3)}`);
                  console.log(`   Explanation: "${question.explanation}"`);
                  console.log('');
                  fileIssues++;
                  totalIssues++;
                  break; // Only report one mismatch per question
                }
              }
            }
            
            // Also check if explanation contradicts the marked correct answer
            const correctWords = correctText.split(' ').filter(word => word.length > 5);
            const correctSignificantWords = correctWords.slice(0, 3);
            
            if (correctSignificantWords.length > 0) {
              const contradictionPhrases = [
                `${correctText} is incorrect`,
                `${correctText} does not`,
                `${correctText} cannot`,
                `not ${correctText}`,
                `incorrect because ${correctText}`
              ];
              
              const foundContradiction = contradictionPhrases.some(phrase => 
                explanationLower.includes(phrase.substring(0, 20))
              );
              
              if (foundContradiction) {
                console.log(`🚨 CONTRADICTION FOUND - Question ${questionNum}:`);
                console.log(`   Question: "${question.question.substring(0, 80)}..."`);
                console.log(`   Marked Correct: ${question.correctAnswer}. ${correctOption.substring(3)}`);
                console.log(`   Explanation contradicts this choice`);
                console.log(`   Explanation: "${question.explanation}"`);
                console.log('');
                fileIssues++;
                totalIssues++;
              }
            }
          }
        }
      });
      
      if (fileIssues === 0) {
        console.log(`   ✅ No mismatches found`);
      } else {
        console.log(`   ❌ Found ${fileIssues} potential mismatches`);
      }
      console.log('');
      
    } catch (error) {
      console.error(`Error processing ${filename}:`, error.message);
    }
  });
  
  console.log('=== Summary ===');
  if (totalIssues === 0) {
    console.log('✅ No answer/explanation mismatches found!');
  } else {
    console.log(`❌ Found ${totalIssues} potential answer/explanation mismatches that need review`);
  }
}

findAnswerExplanationMismatches();
