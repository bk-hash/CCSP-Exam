const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, 'src', 'questions');

function escapeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
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

function setAllHard() {
  const files = fs.readdirSync(QUESTIONS_DIR).filter(f => f.startsWith('domain') && f.endsWith('.js'));
  let total = 0;
  for (const file of files) {
    const filePath = path.join(QUESTIONS_DIR, file);
    delete require.cache[require.resolve(filePath)];
    const data = require(filePath).default;
    if (!Array.isArray(data)) continue;
    let changed = false;
    for (const q of data) {
      if (q.difficulty !== 'hard') {
        q.difficulty = 'hard';
        changed = true;
        total++;
      }
    }
    if (changed) {
      const newContent = buildNewContent(data);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Updated ${file} (${data.length} questions)`);
    } else {
      console.log(`No change needed for ${file}`);
    }
  }
  console.log(`\nTotal questions changed to hard: ${total}`);
}

setAllHard();
