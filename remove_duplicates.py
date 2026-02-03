#!/usr/bin/env python3
"""Remove duplicate questions from domain files while preserving the first occurrence."""

import os
import json
import re
from pathlib import Path

def parse_domain_file(file_path):
    """Parse a domain JS file and extract the questions array."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the array content between 'const questions = [' and the final '];'
    match = re.search(r'const\s+questions\s*=\s*\[([\s\S]*?)\];\s*export', content)
    if not match:
        return None, content
    
    array_content = match.group(1)
    return array_content, content

def extract_question_objects(array_content):
    """Extract individual question objects from array content."""
    # Split by complete objects (from { to matching })
    objects = []
    current_obj = ""
    brace_count = 0
    in_string = False
    escape_next = False
    
    for char in array_content:
        if escape_next:
            current_obj += char
            escape_next = False
            continue
        
        if char == '\\' and in_string:
            current_obj += char
            escape_next = True
            continue
        
        if char == '"' and not escape_next:
            in_string = not in_string
        
        if not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
        
        current_obj += char
        
        if brace_count == 0 and current_obj.strip() and current_obj.strip() != ',':
            if current_obj.strip().endswith('},'):
                obj_str = current_obj.strip().rstrip(',').strip()
            else:
                obj_str = current_obj.strip()
            
            if obj_str.startswith('{') and obj_str.endswith('}'):
                objects.append(obj_str)
                current_obj = ""
    
    return objects

def get_question_text(obj_str):
    """Extract question text from a question object string."""
    match = re.search(r'question:\s*["\']([^"\']*)["\']', obj_str)
    if match:
        return match.group(1)
    return None

def remove_duplicates_from_file(domain_num):
    """Remove duplicates from a domain file."""
    file_path = f'src/questions/domain{domain_num}.js'
    
    if not os.path.exists(file_path):
        print(f"❌ File not found: {file_path}")
        return False
    
    array_content, full_content = parse_domain_file(file_path)
    
    if array_content is None:
        print(f"❌ Could not parse {file_path}")
        return False
    
    objects = extract_question_objects(array_content)
    
    # Track seen questions by their text
    seen_questions = set()
    unique_objects = []
    duplicates_removed = 0
    
    for obj_str in objects:
        question_text = get_question_text(obj_str)
        
        if question_text:
            if question_text in seen_questions:
                duplicates_removed += 1
                continue
            else:
                seen_questions.add(question_text)
        
        unique_objects.append(obj_str)
    
    if duplicates_removed == 0:
        print(f"✅ Domain {domain_num}: No duplicates found ({len(unique_objects)} questions)")
        return True
    
    # Rebuild the file with unique questions
    new_content = full_content[:full_content.find('[')]
    new_content += '[\n'
    
    for i, obj_str in enumerate(unique_objects):
        new_content += '  ' + obj_str.strip()
        if i < len(unique_objects) - 1:
            new_content += ',\n'
        else:
            new_content += '\n'
    
    new_content += '];\n'
    new_content += full_content[full_content.rfind('export'):]
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✨ Domain {domain_num}: Removed {duplicates_removed} duplicate(s) ({len(unique_objects)} unique questions remain)")
    return True

# Process all domains
print("🔧 Removing duplicate questions from all domains...\n")

domains_processed = 0
for domain_num in range(1, 7):
    if remove_duplicates_from_file(domain_num):
        domains_processed += 1

print(f"\n✅ Processed {domains_processed} domain files")
