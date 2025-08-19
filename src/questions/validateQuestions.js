// Question validation script to find answer mismatches
const fs = require('fs');
const path = require('path');

// Import all question files
const domain1 = require('./domain1.js');
const domain2 = require('./domain2.js');
const domain3 = require('./domain3.js');
const domain4 = require('./domain4.js');
const domain5 = require('./domain5.js');
const domain6 = require('./domain6.js');

const allDomains = [
  { name: 'Domain 1', questions: domain1 },
  { name: 'Domain 2', questions: domain2 },
  { name: 'Domain 3', questions: domain3 },
  { name: 'Domain 4', questions: domain4 },
  { name: 'Domain 5', questions: domain5 },
  { name: 'Domain 6', questions: domain6 }
];

const issues = [];

function validateQuestions() {
  allDomains.forEach(domain => {
    if (!domain.questions || !Array.isArray(domain.questions)) {
      console.log(`${domain.name}: No questions array found`);
      return;
    }

    domain.questions.forEach((question, index) => {
      const questionNumber = index + 1;
      
      // Check if correctAnswer exists in options
      if (!question.correctAnswer) {
        issues.push({
          domain: domain.name,
          questionNumber,
          issue: 'Missing correctAnswer field',
          question: question.question?.substring(0, 100) + '...'
        });
        return;
      }

      if (!question.options || !Array.isArray(question.options)) {
        issues.push({
          domain: domain.name,
          questionNumber,
          issue: 'Missing or invalid options array',
          question: question.question?.substring(0, 100) + '...'
        });
        return;
      }

      // Find if correctAnswer matches any option
      const correctAnswer = question.correctAnswer.trim().toUpperCase();
      const hasMatchingOption = question.options.some(option => {
        const optionLetter = option.trim().charAt(0).toUpperCase();
        return optionLetter === correctAnswer;
      });

      if (!hasMatchingOption) {
        issues.push({
          domain: domain.name,
          questionNumber,
          issue: `Correct answer "${correctAnswer}" not found in options`,
          question: question.question?.substring(0, 100) + '...',
          options: question.options,
          correctAnswer: question.correctAnswer
        });
      }

      // Check for duplicate options
      const optionLetters = question.options.map(opt => opt.trim().charAt(0).toUpperCase());
      const duplicateLetters = optionLetters.filter((letter, index) => optionLetters.indexOf(letter) !== index);
      if (duplicateLetters.length > 0) {
        issues.push({
          domain: domain.name,
          questionNumber,
          issue: `Duplicate option letters: ${duplicateLetters.join(', ')}`,
          question: question.question?.substring(0, 100) + '...',
          options: question.options
        });
      }

      // Check for missing explanation
      if (!question.explanation) {
        issues.push({
          domain: domain.name,
          questionNumber,
          issue: 'Missing explanation',
          question: question.question?.substring(0, 100) + '...'
        });
      }
    });
  });

  return issues;
}

// Run validation
console.log('🔍 Validating CCSP Quiz Questions...\n');
const foundIssues = validateQuestions();

if (foundIssues.length === 0) {
  console.log('✅ All questions appear to be correctly formatted!');
} else {
  console.log(`❌ Found ${foundIssues.length} issues:\n`);
  foundIssues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.domain} - Question ${issue.questionNumber}`);
    console.log(`   Issue: ${issue.issue}`);
    console.log(`   Question: ${issue.question}`);
    if (issue.options) {
      console.log(`   Options: ${JSON.stringify(issue.options, null, 2)}`);
    }
    if (issue.correctAnswer) {
      console.log(`   Marked Correct: ${issue.correctAnswer}`);
    }
    console.log('');
  });
}

module.exports = { validateQuestions, issues: foundIssues };
