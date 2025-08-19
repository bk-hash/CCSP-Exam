const fs = require('fs');
const path = require('path');

// Function to safely evaluate the questions array from a file
function getQuestionsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the questions array using regex
    const questionsMatch = content.match(/const questions = (\[[\s\S]*?\]);/);
    if (!questionsMatch) {
      console.log(`No questions array found in ${filePath}`);
      return [];
    }
    
    // Parse the JSON array
    const questionsJSON = questionsMatch[1];
    const questions = JSON.parse(questionsJSON);
    return questions;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Function to validate a single question
function validateQuestion(question, index, domain) {
  const issues = [];
  
  // Check if correctAnswer exists
  if (!question.correctAnswer) {
    issues.push(`Question ${index + 1}: Missing correctAnswer`);
    return issues;
  }
  
  // Check if correctAnswer is valid (A, B, C, or D)
  if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) {
    issues.push(`Question ${index + 1}: Invalid correctAnswer "${question.correctAnswer}" - must be A, B, C, or D`);
  }
  
  // Check if options array exists and has correct structure
  if (!question.options || !Array.isArray(question.options)) {
    issues.push(`Question ${index + 1}: Missing or invalid options array`);
    return issues;
  }
  
  // Check if we have exactly 4 options
  if (question.options.length !== 4) {
    issues.push(`Question ${index + 1}: Expected 4 options, found ${question.options.length}`);
  }
  
  // Check if options are properly labeled A, B, C, D
  const expectedLabels = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const expectedPrefix = `${expectedLabels[i]}. `;
    
    if (!option.startsWith(expectedPrefix)) {
      issues.push(`Question ${index + 1}: Option ${i + 1} should start with "${expectedPrefix}", found: "${option.substring(0, 10)}..."`);
    }
  }
  
  // Check if the correctAnswer corresponds to an existing option
  const correctIndex = question.correctAnswer.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
  if (correctIndex < 0 || correctIndex >= question.options.length) {
    issues.push(`Question ${index + 1}: correctAnswer "${question.correctAnswer}" doesn't correspond to available options`);
  }
  
  // Check for duplicate options
  const optionTexts = question.options.map(opt => opt.substring(3)); // Remove "A. ", "B. ", etc.
  const uniqueOptions = new Set(optionTexts);
  if (uniqueOptions.size !== optionTexts.length) {
    issues.push(`Question ${index + 1}: Duplicate options detected`);
  }
  
  return issues;
}

// Main validation function
function validateAllQuestions() {
  const questionsDir = path.join(__dirname, 'src', 'questions');
  const domainFiles = [
    'domain1.js',
    'domain2.js', 
    'domain3.js',
    'domain4.js',
    'domain5.js',
    'domain6.js'
  ];
  
  let totalQuestions = 0;
  let totalIssues = 0;
  
  console.log('=== CCSP Question Validation Report ===\n');
  
  domainFiles.forEach((filename, domainIndex) => {
    const filePath = path.join(questionsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filename}`);
      return;
    }
    
    console.log(`📁 Validating ${filename}...`);
    
    const questions = getQuestionsFromFile(filePath);
    if (questions.length === 0) {
      console.log(`❌ No questions found in ${filename}\n`);
      return;
    }
    
    console.log(`   Found ${questions.length} questions`);
    totalQuestions += questions.length;
    
    let fileIssues = 0;
    
    questions.forEach((question, index) => {
      const issues = validateQuestion(question, index, domainIndex + 1);
      if (issues.length > 0) {
        if (fileIssues === 0) {
          console.log(`   ❌ Issues found:`);
        }
        issues.forEach(issue => {
          console.log(`      - ${issue}`);
          fileIssues++;
          totalIssues++;
        });
      }
    });
    
    if (fileIssues === 0) {
      console.log(`   ✅ All questions valid`);
    } else {
      console.log(`   ❌ ${fileIssues} issues found`);
    }
    
    console.log('');
  });
  
  console.log('=== Summary ===');
  console.log(`Total questions analyzed: ${totalQuestions}`);
  console.log(`Total issues found: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log('🎉 All questions are valid!');
  } else {
    console.log(`❌ ${totalIssues} issues need attention`);
  }
}

// Run the validation
validateAllQuestions();
