import re
import json

def parse_js_object(text):
    """Parse a JavaScript object string into a Python dict"""
    # Clean up the text
    text = text.strip()
    if not text.startswith('{'):
        return None
    
    # Find the matching closing brace
    brace_count = 0
    end_pos = 0
    for i, char in enumerate(text):
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i + 1
                break
    
    if end_pos == 0:
        return None
    
    obj_text = text[:end_pos]
    
    # Extract fields using regex
    question_dict = {}
    
    # Extract question
    question_match = re.search(r'question:\s*["\']([^"\']*(?:\\.[^"\']*)*)["\']', obj_text, re.DOTALL)
    if question_match:
        question_dict['question'] = question_match.group(1).replace('\\"', '"').replace("\\'", "'")
    
    # Extract options array
    options_match = re.search(r'options:\s*\[(.*?)\]', obj_text, re.DOTALL)
    if options_match:
        options_text = options_match.group(1)
        options = []
        # Find all quoted strings in the options
        option_matches = re.findall(r'["\']([^"\']*(?:\\.[^"\']*)*)["\']', options_text)
        for option in option_matches:
            options.append(option.replace('\\"', '"').replace("\\'", "'"))
        question_dict['options'] = options
    
    # Extract correctAnswer
    answer_match = re.search(r'correctAnswer:\s*["\']([^"\']*)["\']', obj_text)
    if answer_match:
        question_dict['correctAnswer'] = answer_match.group(1)
    
    # Extract explanation
    explanation_match = re.search(r'explanation:\s*["\']([^"\']*(?:\\.[^"\']*)*)["\']', obj_text, re.DOTALL)
    if explanation_match:
        question_dict['explanation'] = explanation_match.group(1).replace('\\"', '"').replace("\\'", "'")
    
    # Extract difficulty
    difficulty_match = re.search(r'difficulty:\s*["\']([^"\']*)["\']', obj_text)
    if difficulty_match:
        question_dict['difficulty'] = difficulty_match.group(1)
    
    # Extract domain
    domain_match = re.search(r'domain:\s*["\']([^"\']*(?:\\.[^"\']*)*)["\']', obj_text, re.DOTALL)
    if domain_match:
        question_dict['domain'] = domain_match.group(1).replace('\\"', '"').replace("\\'", "'")
    
    # Extract type
    type_match = re.search(r'type:\s*["\']([^"\']*)["\']', obj_text)
    if type_match:
        question_dict['type'] = type_match.group(1)
    
    return question_dict

def extract_questions_from_js_manual(file_path):
    """Extract questions using manual parsing"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove comments
    content = re.sub(r'//.*?\n', '\n', content)
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    
    # Find all question objects
    questions = []
    
    # Look for objects that start with question:
    pattern = r'\{\s*question:'
    matches = re.finditer(pattern, content)
    
    for match in matches:
        start_pos = match.start()
        
        # Find the complete object
        brace_count = 0
        end_pos = start_pos
        for i in range(start_pos, len(content)):
            char = content[i]
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = i + 1
                    break
        
        if end_pos > start_pos:
            obj_text = content[start_pos:end_pos]
            question_dict = parse_js_object(obj_text)
            if question_dict and 'question' in question_dict:
                questions.append(question_dict)
    
    return questions

def extract_questions_from_js_eval(file_path):
    """Extract questions using eval method for domains 5&6"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove comments
    content = re.sub(r'//.*?\n', '\n', content)
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    
    # Find the questions array
    match = re.search(r'const\s+\w+\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if not match:
        return []
    
    js_array = match.group(1)
    
    # Fix JavaScript property names (add quotes)
    js_array = re.sub(r'(\w+):', r'"\1":', js_array)
    
    # Fix trailing commas
    js_array = re.sub(r',(\s*[}\]])', r'\1', js_array)
    
    try:
        questions = json.loads(js_array)
        return questions
    except json.JSONDecodeError:
        try:
            # Fallback to eval
            array_content = re.sub(r'const\s+\w+\s*=\s*', '', content)
            array_content = re.sub(r';\s*export.*', '', array_content, flags=re.DOTALL)
            questions = eval(array_content)
            return questions
        except:
            return []

def calculate_difficulty_score(question):
    """Calculate difficulty score based on multiple factors"""
    score = 0
    question_text = question.get('question', '').lower()
    explanation = question.get('explanation', '').lower()
    options = [opt.lower() for opt in question.get('options', [])]
    
    # Explicit difficulty rating (highest weight)
    if 'difficulty' in question:
        if question['difficulty'] == 'hard':
            score += 100
        elif question['difficulty'] == 'medium':
            score += 50
        elif question['difficulty'] == 'easy':
            score += 10
    
    # Keyword-based difficulty indicators (negative questions are harder)
    difficult_keywords = [
        'except', 'not', 'least likely', 'inappropriate', 'wrong', 'incorrect',
        'which of the following is false', 'which is not', 'does not',
        'compliance', 'legal', 'regulation', 'standard', 'framework',
        'architecture', 'implementation', 'advanced', 'complex',
        'encryption', 'cryptography', 'certificate', 'pki',
        'vulnerability', 'threat', 'risk assessment', 'audit',
        'soc 2', 'iso 27001', 'nist', 'gdpr', 'hipaa', 'pci dss',
        'saml', 'oauth', 'openid', 'federation', 'identity',
        'disaster recovery', 'business continuity', 'incident response',
        'forensics', 'evidence', 'chain of custody'
    ]
    
    for keyword in difficult_keywords:
        if keyword in question_text:
            score += 15
        if keyword in explanation:
            score += 10
        for option in options:
            if keyword in option:
                score += 5
    
    # Question length (longer questions tend to be more complex)
    question_length = len(question_text.split())
    if question_length > 40:
        score += 20
    elif question_length > 25:
        score += 10
    
    # Number of options (more options can increase difficulty)
    num_options = len(question.get('options', []))
    if num_options > 4:
        score += 10
    
    # Technical depth indicators
    technical_terms = [
        'api', 'sdk', 'json', 'xml', 'yaml', 'rest', 'soap',
        'virtualization', 'hypervisor', 'container', 'docker', 'kubernetes',
        'microservices', 'serverless', 'lambda', 'function as a service',
        'blockchain', 'smart contract', 'distributed ledger',
        'machine learning', 'artificial intelligence', 'ml', 'ai',
        'zero trust', 'sase', 'casb', 'dwp', 'dlp'
    ]
    
    for term in technical_terms:
        if term in question_text or term in explanation:
            score += 8
    
    # Advanced security concepts
    advanced_concepts = [
        'shared security model', 'security boundary', 'threat modeling',
        'security architecture', 'control framework', 'risk matrix',
        'incident classification', 'evidence handling', 'forensic analysis',
        'security assessment', 'penetration testing', 'vulnerability assessment'
    ]
    
    for concept in advanced_concepts:
        if concept in question_text or concept in explanation:
            score += 12
    
    return score

def main():
    domain_files = [
        ('src/questions/domain1.js', 'manual'),
        ('src/questions/domain2.js', 'manual'),
        ('src/questions/domain3.js', 'manual'),
        ('src/questions/domain4.js', 'manual'),
        ('src/questions/domain5.js', 'eval'),
        ('src/questions/domain6.js', 'eval')
    ]
    
    all_questions = []
    
    # Extract all questions from all domains
    for i, (file_path, method) in enumerate(domain_files, 1):
        print(f"Processing {file_path} using {method} method...")
        
        if method == 'manual':
            questions = extract_questions_from_js_manual(file_path)
        else:
            questions = extract_questions_from_js_eval(file_path)
        
        # Add domain info and calculate difficulty scores
        for question in questions:
            question['domain'] = f"Domain {i}"
            question['difficulty_score'] = calculate_difficulty_score(question)
            all_questions.append(question)
        
        print(f"  Found {len(questions)} questions")
    
    print(f"\nTotal questions: {len(all_questions)}")
    
    # Sort by difficulty score (highest first)
    all_questions.sort(key=lambda q: q['difficulty_score'], reverse=True)
    
    # Show some stats
    scores = [q['difficulty_score'] for q in all_questions]
    print(f"Difficulty scores range: {min(scores)} - {max(scores)}")
    print(f"Average difficulty score: {sum(scores) / len(scores):.1f}")
    
    # Select questions for Practice Exam 1 (top 120 most difficult)
    exam1_questions = all_questions[:120]
    
    # Select questions for Practice Exam 2 (next 120 most difficult, no overlap)
    exam2_questions = all_questions[120:240]
    
    print(f"\nPractice Exam 1: {len(exam1_questions)} questions")
    print(f"Practice Exam 2: {len(exam2_questions)} questions")
    
    # Distribution by domain for Exam 1
    exam1_domains = {}
    for q in exam1_questions:
        domain = q['domain']
        exam1_domains[domain] = exam1_domains.get(domain, 0) + 1
    
    print(f"\nPractice Exam 1 distribution by domain:")
    for domain, count in sorted(exam1_domains.items()):
        print(f"  {domain}: {count} questions")
    
    # Distribution by domain for Exam 2
    exam2_domains = {}
    for q in exam2_questions:
        domain = q['domain']
        exam2_domains[domain] = exam2_domains.get(domain, 0) + 1
    
    print(f"\nPractice Exam 2 distribution by domain:")
    for domain, count in sorted(exam2_domains.items()):
        print(f"  {domain}: {count} questions")
    
    # Create JavaScript files
    def create_js_file(questions, filename):
        # Remove domain and difficulty_score fields for export
        clean_questions = []
        for q in questions:
            clean_q = {k: v for k, v in q.items() if k not in ['domain', 'difficulty_score']}
            clean_questions.append(clean_q)
        
        js_content = f"""const practiceExamQuestions = {json.dumps(clean_questions, indent=2, ensure_ascii=False)};

export default practiceExamQuestions;
"""
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Created {filename}")
    
    # Create the practice exam files
    create_js_file(exam1_questions, 'src/questions/practice_exam1.js')
    create_js_file(exam2_questions, 'src/questions/practice_exam2.js')
    
    print(f"\nTop 10 most difficult questions:")
    for i, q in enumerate(all_questions[:10], 1):
        print(f"{i}. [{q['domain']}] Score: {q['difficulty_score']} - {q['question'][:80]}...")

if __name__ == "__main__":
    main()
