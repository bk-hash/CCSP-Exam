const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'src', 'questions');
const domainFiles = ['domain1.js','domain2.js','domain3.js','domain4.js','domain5.js','domain6.js'];

function detectExplanationAnswer(explanation, options) {
  if (!explanation) return null;
  const expl = explanation.toLowerCase();
  // direct patterns
  const patterns = [/the correct answer is ([a-d])\b/i, /correct answer is ([a-d])\b/i, /answer is ([a-d])\b/i, /the answer is ([a-d])\b/i];
  for (const p of patterns) {
    const m = explanation.match(p);
    if (m) return m[1].toUpperCase();
  }
  // Try exact option-text substring match (handles short words like "hot aisle")
  for (const letter of ['A','B','C','D']) {
    const opt = options.find(o => o.startsWith(`${letter}. `));
    if (!opt) continue;
    const optText = opt.substring(3).toLowerCase().replace(/\s+/g, ' ').trim();
    if (!optText) continue;
    if (expl.includes(optText)) return letter;
  }

  // Fallback: match by significant keywords (long words) and presence of 'correct' hint
  for (const letter of ['A','B','C','D']) {
    const opt = options.find(o => o.startsWith(`${letter}. `));
    if (!opt) continue;
    const optText = opt.substring(3).toLowerCase();
    const words = optText.split(/\W+/).filter(w=>w.length>4).slice(0,3);
    if (words.length < 1) continue;
    const foundAll = words.every(w => expl.includes(w));
    const mentionsCorrect = /correct|right|best|most/.test(expl);
    if (foundAll && mentionsCorrect) return letter;
  }
  return null;
}

function buildFileContent(questions) {
  function esc(s){ if(typeof s!=='string') return ''; return s.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r'); }
  let out = 'const questions = [\n';
  for (let i=0;i<questions.length;i++){
    const q = questions[i];
    out += '  {\n';
    out += `    question: "${esc(q.question||'')}",\n`;
    out += '    options: [\n';
    const opts = Array.isArray(q.options)?q.options:[];
    for (let j=0;j<opts.length;j++){
      out += `      "${esc(opts[j]||'')}"${j<opts.length-1?',':''}\n`;
    }
    out += '    ],\n';
    out += `    correctAnswer: "${(q.correctAnswer||'').toUpperCase()}",\n`;
    if (q.explanation) out += `    explanation: "${esc(q.explanation)}",\n`;
    out += `    domain: "${esc(q.domain||'')}",\n`;
    out += `    type: "${esc(q.type||'')}",\n`;
    out += `    difficulty: "${esc(q.difficulty||'') }"\n`;
    out += `  }${i<questions.length-1? ',':''}\n`;
  }
  out += '];\n\nexport default questions;\n';
  return out;
}

let totalFixed = 0;
let totalCandidates = 0;

for (const file of domainFiles) {
  const filePath = path.join(questionsDir, file);
  if (!fs.existsSync(filePath)) { console.log('Missing', file); continue; }
  delete require.cache[require.resolve(filePath)];
  const questions = require(filePath).default;
  if (!Array.isArray(questions)) continue;

  let changed = false;
  let fileFixed = 0;

  for (let i=0;i<questions.length;i++){
    const q = questions[i];
    if (!q || !q.options || !q.explanation || !q.correctAnswer) continue;
    const detected = detectExplanationAnswer(q.explanation, q.options);
    if (detected && detected !== q.correctAnswer.toUpperCase()) {
      // ensure detected maps to an existing option
      const opt = q.options.find(o => o.startsWith(`${detected}. `));
      if (opt) {
        console.log(`Fixing ${file} Q${i+1}: ${q.correctAnswer} -> ${detected}`);
        q.correctAnswer = detected;
        changed = true;
        fileFixed++; totalFixed++;
      }
    }
    // count candidates where explanation explicitly states an answer but it already matches
    if (detected) totalCandidates++;
  }

  if (changed) {
    const newContent = buildFileContent(questions);
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Wrote updated ${file} (${questions.length} questions). Fixed ${fileFixed} items.`);
  } else {
    console.log(`No fixes needed for ${file}`);
  }
}

console.log(`\nDone. Total fixes applied: ${totalFixed}. Explanation-detected candidates: ${totalCandidates}.`);
