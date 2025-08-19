import re
import json
import random

def extract_questions_from_js(file_path):
    """Extract questions array from JavaScript file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the questions array
    match = re.search(r'const\s+\w+\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if not match:
        print(f"No questions found in {file_path}")
        return []
    
    # Parse the JavaScript array as JSON (with some cleanup)
    js_array = match.group(1)
    
    # Replace JavaScript-style comments and clean up
    js_array = re.sub(r'//.*?\n', '\n', js_array)
    js_array = re.sub(r'/\*.*?\*/', '', js_array, flags=re.DOTALL)
    
    # Fix JavaScript property names (add quotes)
    js_array = re.sub(r'(\w+):', r'"\1":', js_array)
    
    # Fix trailing commas and other JavaScript quirks
    js_array = re.sub(r',(\s*[}\]])', r'\1', js_array)
    
    try:
        questions = json.loads(js_array)
        return questions
    except json.JSONDecodeError as e:
        print(f"JSON parsing error in {file_path}: {e}")
        # Try a different approach - use eval (less safe but handles JS syntax)
        try:
            # Replace const declaration with just the array
            array_content = re.sub(r'const\s+\w+\s*=\s*', '', content)
            array_content = re.sub(r';\s*export.*', '', array_content, flags=re.DOTALL)
            questions = eval(array_content)
            return questions
        except Exception as e2:
            print(f"Eval parsing error in {file_path}: {e2}")
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
    
    # Keyword-based difficulty indicators
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
        'machine learning', 'artificial intelligence', 'ml', 'ai'
    ]
    
    for term in technical_terms:
        if term in question_text or term in explanation:
            score += 8
    
    return score

def main():
    domain_files = [
        'src/questions/domain1.js',
        'src/questions/domain2.js', 
        'src/questions/domain3.js',
        'src/questions/domain4.js',
        'src/questions/domain5.js',
        'src/questions/domain6.js'
    ]
    
    all_questions = []
    
    # Extract all questions from all domains
    for i, file_path in enumerate(domain_files, 1):
        print(f"Processing {file_path}...")
        questions = extract_questions_from_js(file_path)
        
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
        
        js_content = f"""const practiceExamQuestions = {json.dumps(clean_questions, indent=2)};

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
