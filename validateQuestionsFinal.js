const fs = require('fs');
const path = require('path');

// Function to safely extract questions from JavaScript files
function getQuestionsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments and clean up the file
    let cleanContent = content
      .replace(/\/\/.*$/gm, '')  // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, ''); // Remove multi-line comments
    
    // Find the questions array
    const arrayMatch = cleanContent.match(/const\s+questions\s*=\s*(\[[\s\S]*?\]);/);
    if (!arrayMatch) {
      console.log(`No questions array found in ${path.basename(filePath)}`);
      return [];
    }
    
    // Extract and parse the array
    let questionsStr = arrayMatch[1];
    
    // Handle trailing commas that might cause JSON parsing issues
    questionsStr = questionsStr.replace(/,(\s*[}\]])/g, '$1');
    
    try {
      const questions = JSON.parse(questionsStr);
      return questions;
    } catch (parseError) {
      // If direct parsing fails, try eval (less safe but handles JS syntax)
      try {
        const questions = eval(questionsStr);
        return questions;
      } catch (evalError) {
        console.error(`Failed to parse questions in ${path.basename(filePath)}:`, parseError.message);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error reading ${path.basename(filePath)}:`, error.message);
    return [];
  }
}

// Function to validate a single question
function validateQuestion(question, index, filename) {
  const issues = [];
  
  // Check if question object has required properties
  if (!question.question) {
    issues.push(`Question ${index + 1}: Missing question text`);
  }
  
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
    // Show the actual options for debugging
    console.log(`      Options found: ${JSON.stringify(question.options, null, 2)}`);
  }
  
  // Check if options are properly labeled A, B, C, D
  const expectedLabels = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < Math.min(question.options.length, 4); i++) {
    const option = question.options[i];
    const expectedPrefix = `${expectedLabels[i]}. `;
    
    if (!option || !option.startsWith(expectedPrefix)) {
      issues.push(`Question ${index + 1}: Option ${i + 1} should start with "${expectedPrefix}", found: "${option ? option.substring(0, 20) : 'undefined'}..."`);
    }
  }
  
  // Check if the correctAnswer corresponds to an existing option
  const correctIndex = question.correctAnswer.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
  if (correctIndex < 0 || correctIndex >= question.options.length) {
    issues.push(`Question ${index + 1}: correctAnswer "${question.correctAnswer}" doesn't correspond to available options (only ${question.options.length} options available)`);
  }
  
  // Check for duplicate options
  if (question.options.length >= 2) {
    const optionTexts = question.options.map(opt => opt ? opt.substring(3).trim() : ''); // Remove "A. ", "B. ", etc.
    const uniqueOptions = new Set(optionTexts.filter(opt => opt.length > 0));
    if (uniqueOptions.size !== optionTexts.filter(opt => opt.length > 0).length) {
      issues.push(`Question ${index + 1}: Duplicate options detected`);
    }
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
    let issueDetails = [];
    
    questions.forEach((question, index) => {
      const issues = validateQuestion(question, index, filename);
      if (issues.length > 0) {
        issues.forEach(issue => {
          issueDetails.push(`      - ${issue}`);
          fileIssues++;
          totalIssues++;
        });
      }
    });
    
    if (fileIssues === 0) {
      console.log(`   ✅ All questions valid`);
    } else {
      console.log(`   ❌ Issues found:`);
      issueDetails.forEach(detail => console.log(detail));
      console.log(`   Total: ${fileIssues} issues`);
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
