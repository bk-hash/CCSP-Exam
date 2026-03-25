const fs = require('fs');
const path = require('path');

const PRACTICE_TXT = path.join(__dirname, 'Documents', 'test practice.txt');
const QUESTIONS_DIR = path.join(__dirname, 'src', 'questions');

function parsePracticeQuestions(text) {
  // Matches lines that start with number + dot and captures following question text until an option A.
  // We'll be conservative: capture from "\d+\.\s*" up to next line that starts with two or more spaces + A.
  const questions = [];
  const lines = text.split(/\r?\n/);
  let buffer = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^\s*(\d+)\.\s*(.*)/);
    if (m) {
      // start new question
      if (buffer) {
        questions.push(buffer.trim());
      }
      buffer = m[2];
      continue;
    }
    if (buffer !== null) {
      // stop if we hit an option line like 'A.' at start
      if (/^\s*[A-D]\./.test(line) || /^\s*A\./.test(line)) {
        // end question
        questions.push(buffer.trim());
        buffer = null;
        // skip until next question
        continue;
      }
      // append line to buffer
      buffer += ' ' + line.trim();
    }
  }
  if (buffer) questions.push(buffer.trim());
  // Clean up spaces and trailing punctuation
  return questions.map(q => q.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

function buildNewContent(questions) {
  let content = 'const questions = [\n';
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    content += '  {\n';
    content += `    question: "${escapeString(q.question || '')}",\n`;
    content += '    options: [\n';
    const opts = Array.isArray(q.options) ? q.options : [];
    for (let j = 0; j < opts.length; j++) {
      content += `      "${escapeString(opts[j] || '')}"${j < opts.length - 1 ? ',' : ''}\n`;
    }
    content += '    ],\n';
    content += `    correctAnswer: "${q.correctAnswer || ''}",\n`;
    if (q.explanation) {
      content += `    explanation: "${escapeString(q.explanation)}",\n`;
    }
    content += `    domain: "${q.domain || ''}",\n`;
    content += `    type: "${q.type || ''}",\n`;
    content += `    difficulty: "${q.difficulty || ''}"\n`;
    content += `  }${i < questions.length - 1 ? ',' : ''}\n`;
  }
  content += '];\n\nexport default questions;\n';
  return content;
}

function escapeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

function matchAndSetHard(practiceQuestions) {
  const domainFiles = fs.readdirSync(QUESTIONS_DIR).filter(f => f.startsWith('domain') && f.endsWith('.js'));
  let totalMatched = 0;
  for (const file of domainFiles) {
    const filePath = path.join(QUESTIONS_DIR, file);
    delete require.cache[require.resolve(filePath)];
    const data = require(filePath).default;
    if (!Array.isArray(data)) continue;

    let changed = false;
    for (const q of data) {
      const qText = (q.question || '').replace(/\s+/g, ' ').trim().toLowerCase();
      // If already hard, skip unless we want to force
      if ((q.difficulty || '').toLowerCase() === 'hard') continue;

      // If the question text appears in practiceQuestions (loose match), set to hard
      const found = practiceQuestions.some(pq => {
        const pqnorm = pq.replace(/\s+/g, ' ').trim().toLowerCase();
        // check either direction substring to handle truncated formatting
        return pqnorm.includes(qText) || qText.includes(pqnorm) || pqnorm.startsWith(qText) || qText.startsWith(pqnorm);
      });

      // Logic: also mark unknown difficulties as hard
      if (found || !(q.difficulty)) {
        q.difficulty = 'hard';
        changed = true;
        totalMatched++;
      }
    }

    if (changed) {
      const newContent = buildNewContent(data);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Updated ${file} — wrote ${data.length} questions`);
    } else {
      console.log(`No changes for ${file}`);
    }
  }
  return totalMatched;
}

function main() {
  const txt = fs.readFileSync(PRACTICE_TXT, 'utf-8');
  const practiceQuestions = parsePracticeQuestions(txt);
  console.log(`Parsed ${practiceQuestions.length} practice questions from ${PRACTICE_TXT}`);

  const matched = matchAndSetHard(practiceQuestions);
  console.log(`\nTotal questions updated to 'hard': ${matched}`);
}

main();
