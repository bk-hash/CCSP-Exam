const fs = require('fs');
const path = require('path');

// Function to extract and check domain 1 for content logic issues
function checkDomain1ContentLogic() {
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
    
    console.log(`=== Domain 1 Content Logic Check ===`);
    console.log(`Found ${questions.length} questions\n`);
    
    let potentialIssues = 0;
    
    questions.forEach((question, index) => {
      const questionNum = index + 1;
      
      // Check for common logical issues
      
      // 1. Check if explanation contradicts the correct answer
      if (question.explanation && question.correctAnswer && question.options) {
        const correctOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
        const correctText = correctOption ? correctOption.substring(3) : '';
        
        // Look for explanations that might contradict
        const explanationLower = question.explanation.toLowerCase();
        const correctTextLower = correctText.toLowerCase();
        
        // Check for potential contradictions in explanations
        if (explanationLower.includes('incorrect') && explanationLower.includes(correctTextLower.substring(0, 20))) {
          console.log(`⚠️  Question ${questionNum}: Explanation may contradict correct answer`);
          console.log(`   Question: "${question.question.substring(0, 80)}..."`);
          console.log(`   Correct Answer: ${question.correctAnswer}. ${correctText}`);
          console.log(`   Explanation: "${question.explanation}"`);
          console.log('');
          potentialIssues++;
        }
      }
      
      // 2. Check for obviously wrong correct answers (by looking at option content)
      if (question.options && question.correctAnswer) {
        const correctOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
        if (correctOption) {
          const correctText = correctOption.substring(3).toLowerCase();
          
          // Check for obviously wrong answers
          const obviouslyWrongPhrases = [
            'never', 'not', 'incorrect', 'false', 'wrong', 'impossible', 'cannot', 'should not'
          ];
          
          // If question asks "which is NOT" or "which is FALSE" but correct answer doesn't contain negative
          const questionLower = question.question.toLowerCase();
          const isNegativeQuestion = questionLower.includes(' not ') || questionLower.includes(' never ') || 
                                   questionLower.includes(' false ') || questionLower.includes(' except ') ||
                                   questionLower.includes(' incorrect ');
          
          if (isNegativeQuestion) {
            // For negative questions, look for answers that seem positive
            const seemsPositive = !obviouslyWrongPhrases.some(phrase => correctText.includes(phrase));
            if (seemsPositive && correctText.length > 10) {
              console.log(`⚠️  Question ${questionNum}: Negative question but positive-sounding answer`);
              console.log(`   Question: "${question.question.substring(0, 80)}..."`);
              console.log(`   Correct Answer: ${question.correctAnswer}. ${correctOption.substring(3)}`);
              console.log('');
              potentialIssues++;
            }
          }
        }
      }
      
      // 3. Check for duplicate or very similar options
      if (question.options && question.options.length === 4) {
        const optionTexts = question.options.map(opt => opt.substring(3).toLowerCase().trim());
        
        for (let i = 0; i < optionTexts.length; i++) {
          for (let j = i + 1; j < optionTexts.length; j++) {
            // Check for high similarity (more than 80% same words)
            const words1 = optionTexts[i].split(/\s+/);
            const words2 = optionTexts[j].split(/\s+/);
            const commonWords = words1.filter(word => words2.includes(word) && word.length > 3);
            
            const similarity = commonWords.length / Math.max(words1.length, words2.length);
            if (similarity > 0.8 && words1.length > 3 && words2.length > 3) {
              console.log(`⚠️  Question ${questionNum}: Very similar options detected`);
              console.log(`   Option ${String.fromCharCode(65 + i)}: ${question.options[i].substring(3)}`);
              console.log(`   Option ${String.fromCharCode(65 + j)}: ${question.options[j].substring(3)}`);
              console.log('');
              potentialIssues++;
            }
          }
        }
      }
      
      // 4. Check for options that contain answer indicators
      if (question.options) {
        question.options.forEach((option, optIndex) => {
          const optionText = option.substring(3).toLowerCase();
          const optionLetter = String.fromCharCode(65 + optIndex);
          
          // Look for phrases that might indicate this is meant to be correct/incorrect
          if (optionText.includes('all of the above') || optionText.includes('none of the above')) {
            if (question.correctAnswer !== optionLetter) {
              console.log(`⚠️  Question ${questionNum}: "All/None of the above" option but not correct answer`);
              console.log(`   Question: "${question.question.substring(0, 80)}..."`);
              console.log(`   Option ${optionLetter}: ${option.substring(3)}`);
              console.log(`   Correct Answer: ${question.correctAnswer}`);
              console.log('');
              potentialIssues++;
            }
          }
        });
      }
    });
    
    console.log(`=== Summary ===`);
    if (potentialIssues === 0) {
      console.log(`✅ Domain 1: No obvious content logic issues found`);
    } else {
      console.log(`⚠️  Domain 1: Found ${potentialIssues} potential content logic issues that may confuse users`);
    }
    
  } catch (error) {
    console.error('Error processing domain1.js:', error.message);
  }
}

checkDomain1ContentLogic();
