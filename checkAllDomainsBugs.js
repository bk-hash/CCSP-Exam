const fs = require('fs');
const path = require('path');

// Function to extract and analyze all domains for correctAnswer/explanation mismatches
function checkAllDomainsForBug() {
  const questionsDir = path.join(__dirname, 'src', 'questions');
  const domainFiles = [
    'domain1.js',
    'domain2.js', 
    'domain3.js',
    'domain4.js',
    'domain5.js',
    'domain6.js'
  ];
  
  let totalBugs = 0;
  let buggedQuestions = [];
  
  console.log('=== Checking All Domains for correctAnswer/Explanation Bugs ===\n');
  
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
      
      let domainBugs = 0;
      
      questions.forEach((question, index) => {
        const questionNum = index + 1;
        
        if (question.explanation && question.correctAnswer && question.options) {
          // Extract what the explanation says is correct
          const explanation = question.explanation.toLowerCase();
          
          // Look for patterns like "The correct answer is X" or "X is the correct answer"
          const correctAnswerPatterns = [
            /the correct answer is ([a-d])\./i,
            /correct answer is ([a-d])\./i,
            /answer is ([a-d])\./i,
            /the answer is ([a-d])\./i
          ];
          
          let explanationSaysCorrect = null;
          
          for (let pattern of correctAnswerPatterns) {
            const match = question.explanation.match(pattern);
            if (match) {
              explanationSaysCorrect = match[1].toUpperCase();
              break;
            }
          }
          
          // Also check if explanation mentions option text as correct
          if (!explanationSaysCorrect) {
            for (let optLetter of ['A', 'B', 'C', 'D']) {
              const option = question.options.find(opt => opt.startsWith(`${optLetter}. `));
              if (option) {
                const optionText = option.substring(3).toLowerCase();
                
                // Check if explanation clearly states this option is correct
                const optionKeywords = optionText.split(' ').filter(word => word.length > 4).slice(0, 3);
                
                if (optionKeywords.length >= 2) {
                  const hasKeywords = optionKeywords.every(keyword => explanation.includes(keyword));
                  const hasCorrectPhrase = explanation.includes('correct') || explanation.includes('right');
                  
                  if (hasKeywords && hasCorrectPhrase && !explanationSaysCorrect) {
                    explanationSaysCorrect = optLetter;
                  }
                }
              }
            }
          }
          
          // Check for mismatch
          if (explanationSaysCorrect && explanationSaysCorrect !== question.correctAnswer) {
            console.log(`🚨 BUG FOUND - ${filename} Question ${questionNum}:`);
            console.log(`   Question: "${question.question.substring(0, 100)}..."`);
            console.log(`   Current correctAnswer: ${question.correctAnswer}`);
            console.log(`   Explanation says correct: ${explanationSaysCorrect}`);
            console.log(`   Marked Option: ${question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `))?.substring(3) || 'Not found'}`);
            console.log(`   Should be Option: ${question.options.find(opt => opt.startsWith(`${explanationSaysCorrect}. `))?.substring(3) || 'Not found'}`);
            console.log(`   Explanation: "${question.explanation}"`);
            console.log('');
            
            buggedQuestions.push({
              domain: filename,
              questionNum: questionNum,
              currentAnswer: question.correctAnswer,
              shouldBeAnswer: explanationSaysCorrect,
              question: question.question,
              explanation: question.explanation
            });
            
            domainBugs++;
            totalBugs++;
          }
        }
      });
      
      if (domainBugs === 0) {
        console.log(`   ✅ No bugs found`);
      } else {
        console.log(`   🚨 Found ${domainBugs} bugs`);
      }
      console.log('');
      
    } catch (error) {
      console.error(`Error processing ${filename}:`, error.message);
    }
  });
  
  console.log('=== SUMMARY ===');
  console.log(`Total bugs found: ${totalBugs}`);
  console.log(`Domains affected: ${domainFiles.filter(f => buggedQuestions.some(q => q.domain === f)).length}/6`);
  
  if (totalBugs > 0) {
    console.log('\n=== BREAKDOWN BY DOMAIN ===');
    domainFiles.forEach(domain => {
      const domainBugs = buggedQuestions.filter(q => q.domain === domain).length;
      if (domainBugs > 0) {
        console.log(`${domain}: ${domainBugs} bugs`);
      }
    });
    
    console.log('\n🔧 Would you like me to create an automated fix script?');
    console.log('This could automatically correct the correctAnswer fields based on the explanations.');
  } else {
    console.log('🎉 No bugs found! All correctAnswer fields match their explanations.');
  }
  
  return buggedQuestions;
}

// Run the check
const bugs = checkAllDomainsForBug();

// Export for potential use in fix script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = bugs;
}
