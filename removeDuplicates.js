const fs = require('fs');
const path = require('path');

/**
 * Remove duplicate questions from domain files (handles missing fields)
 */
async function removeDuplicates() {
  console.log('🔧 Removing duplicate questions from all domains...\n');
  
  for (let domain = 1; domain <= 6; domain++) {
    const filePath = path.join(__dirname, `src/questions/domain${domain}.js`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: domain${domain}.js`);
      continue;
    }
    
    try {
      // Dynamically require to load the questions
      delete require.cache[require.resolve(filePath)];
      const questions = require(filePath).default;
      
      if (!Array.isArray(questions)) {
        console.log(`⚠️  domain${domain}.js does not export an array`);
        continue;
      }
      
      const originalCount = questions.length;
      
      // Track seen questions by text
      const seen = new Set();
      const unique = [];
      
      for (const q of questions) {
        const qText = (q.question || '').trim();
        
        if (!qText) continue;
        if (seen.has(qText)) continue; // Skip duplicates
        
        seen.add(qText);
        unique.push(q);
      }
      
      const duplicatesRemoved = originalCount - unique.length;
      
      if (duplicatesRemoved === 0) {
        console.log(`✅ Domain ${domain}: No duplicates (${unique.length} questions)`);
        continue;
      }
      
      // Rebuild the file with unique questions only
      const newContent = buildNewContent(unique);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      
      console.log(`✨ Domain ${domain}: Removed ${duplicatesRemoved} duplicate(s) (${unique.length} remain)`);
    } catch (err) {
      console.error(`❌ Error processing domain${domain}.js:`, err.message);
    }
  }
  
  console.log('\n✅ Duplicate removal complete');
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
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

removeDuplicates().catch(err => console.error('Error:', err));
