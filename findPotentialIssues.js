const fs = require('fs');
const path = require('path');

// Function to check for confusing explanations and potential bugs
function findPotentialIssues() {
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
  let suspiciousQuestions = [];
  
  console.log('=== Checking for Potential Issues Across All Domains ===\n');
  
  domainFiles.forEach((filename) => {
    const filePath = path.join(questionsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filename}`);
      return;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      let cleanContent = content
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '');
      
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
      
      let domainIssues = 0;
      
      questions.forEach((question, index) => {
        const questionNum = index + 1;
        
        if (question.explanation && question.correctAnswer && question.options) {
          const explanation = question.explanation.toLowerCase();
          const questionText = question.question.toLowerCase();
          
          // Check for various potential issues
          
          // 1. Negative questions with confusing explanations
          const isNegativeQuestion = questionText.includes(' not ') || 
                                   questionText.includes(' never ') || 
                                   questionText.includes(' except ') ||
                                   questionText.includes(' least ') ||
                                   questionText.includes(' false ');
          
          if (isNegativeQuestion && explanation.includes('the correct answer is')) {
            const currentOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
            if (currentOption) {
              const optionText = currentOption.substring(3).toLowerCase();
              
              // Check if explanation mentions the option text directly
              const optionWords = optionText.split(' ').filter(word => word.length > 4);
              const hasOptionWords = optionWords.length > 0 && 
                optionWords.some(word => explanation.includes(word));
              
              if (hasOptionWords) {
                console.log(`⚠️  POTENTIAL ISSUE - ${filename} Question ${questionNum}:`);
                console.log(`   Type: Negative question with potentially confusing explanation`);
                console.log(`   Question: "${question.question.substring(0, 80)}..."`);
                console.log(`   Current Answer: ${question.correctAnswer}. ${currentOption.substring(3)}`);
                console.log(`   Explanation: "${question.explanation}"`);
                console.log('');
                
                suspiciousQuestions.push({
                  domain: filename,
                  questionNum: questionNum,
                  issue: 'Negative question with confusing explanation',
                  currentAnswer: question.correctAnswer
                });
                
                domainIssues++;
                totalIssues++;
              }
            }
          }
          
          // 2. Explanations that seem to contradict the marked answer
          const currentOption = question.options.find(opt => opt.startsWith(`${question.correctAnswer}. `));
          if (currentOption) {
            const optionText = currentOption.substring(3).toLowerCase();
            
            // Check for direct contradictions
            const contradictoryPhrases = [
              `${optionText} is incorrect`,
              `${optionText} is wrong`,
              `${optionText} does not`,
              `not ${optionText}`,
              `${optionText} cannot`
            ];
            
            const hasContradiction = contradictoryPhrases.some(phrase => 
              explanation.includes(phrase.substring(0, 20))
            );
            
            if (hasContradiction) {
              console.log(`🚨 CONTRADICTION - ${filename} Question ${questionNum}:`);
              console.log(`   Question: "${question.question.substring(0, 80)}..."`);
              console.log(`   Current Answer: ${question.correctAnswer}. ${currentOption.substring(3)}`);
              console.log(`   Explanation seems to contradict this choice`);
              console.log(`   Explanation: "${question.explanation}"`);
              console.log('');
              
              suspiciousQuestions.push({
                domain: filename,
                questionNum: questionNum,
                issue: 'Explanation contradicts marked answer',
                currentAnswer: question.correctAnswer
              });
              
              domainIssues++;
              totalIssues++;
            }
          }
        }
      });
      
      if (domainIssues === 0) {
        console.log(`   ✅ No potential issues found`);
      } else {
        console.log(`   ⚠️  Found ${domainIssues} potential issues`);
      }
      console.log('');
      
    } catch (error) {
      console.error(`Error processing ${filename}:`, error.message);
    }
  });
  
  console.log('=== SUMMARY ===');
  console.log(`Total potential issues: ${totalIssues}`);
  
  if (totalIssues > 0) {
    console.log('\n=== BREAKDOWN BY DOMAIN ===');
    domainFiles.forEach(domain => {
      const domainIssues = suspiciousQuestions.filter(q => q.domain === domain).length;
      if (domainIssues > 0) {
        console.log(`${domain}: ${domainIssues} potential issues`);
      }
    });
    
    console.log('\n💡 These issues may need manual review to determine if they are actual bugs.');
  } else {
    console.log('🎉 No obvious potential issues found!');
  }
  
  return suspiciousQuestions;
}

// Run the check
findPotentialIssues();
