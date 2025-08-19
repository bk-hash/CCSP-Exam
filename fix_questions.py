import re
import json
import os

def fix_domain_questions(file_path):
    """Fix the format of questions in domain5.js and domain6.js files"""
    
    print(f"Processing {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by questions using regex
    question_pattern = r'\s*{\s*question:\s*"([^"]+)",'
    questions = []
    
    # Find all question starts
    matches = list(re.finditer(question_pattern, content))
    
    for i, match in enumerate(matches):
        start_pos = match.start()
        
        # Find the end of this question (start of next question or end of array)
        if i + 1 < len(matches):
            end_pos = matches[i + 1].start()
        else:
            # Find the closing of the questions array
            end_pos = content.rfind('];')
        
        question_text = content[start_pos:end_pos]
        
        # Extract question components
        question_match = re.search(r'question:\s*"([^"]*(?:\\.[^"]*)*)"', question_text)
        if not question_match:
            continue
            
        question = question_match.group(1)
        
        # Extract options
        options_match = re.search(r'options:\s*\[\s*((?:"[^"]*(?:\\.[^"]*)*"\s*,?\s*)+)\s*\]', question_text)
        if not options_match:
            continue
            
        options_text = options_match.group(1)
        options = re.findall(r'"([^"]*(?:\\.[^"]*)*)"', options_text)
        
        # Extract answer
        answer_match = re.search(r'answer:\s*"([^"]*(?:\\.[^"]*)*)"', question_text)
        if not answer_match:
            continue
            
        answer = answer_match.group(1)
        
        # Extract domain
        domain_match = re.search(r'domain:\s*"([^"]*(?:\\.[^"]*)*)"', question_text)
        domain = domain_match.group(1) if domain_match else "Cloud Security Operations"
        
        # Find correct answer index
        try:
            correct_index = options.index(answer)
        except ValueError:
            print(f"Warning: Could not find answer '{answer}' in options for question: {question[:50]}...")
            continue
        
        # Convert to new format
        letters = ['A', 'B', 'C', 'D', 'E', 'F']
        new_options = [f"{letters[j]}. {opt}" for j, opt in enumerate(options)]
        
        new_question = {
            'question': question,
            'options': new_options,
            'correctAnswer': letters[correct_index],
            'explanation': f"The correct answer is {answer}.",
            'domain': domain
        }
        
        questions.append(new_question)
    
    # Generate new file content
    questions_json = json.dumps(questions, indent=2, ensure_ascii=False)
    new_content = f"const questions = {questions_json};\n\nexport default questions;\n"
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Fixed {len(questions)} questions in {file_path}")

# Process the files
base_path = r"e:\Study\CSSP Study\ccsp_quiz\ccsp-quiz-flashcards\src\questions"
domain5_path = os.path.join(base_path, "domain5.js")
domain6_path = os.path.join(base_path, "domain6.js")

if os.path.exists(domain5_path):
    fix_domain_questions(domain5_path)
else:
    print(f"File not found: {domain5_path}")

if os.path.exists(domain6_path):
    fix_domain_questions(domain6_path)
else:
    print(f"File not found: {domain6_path}")

print("Conversion complete!")
