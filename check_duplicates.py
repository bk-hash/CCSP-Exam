#!/usr/bin/env python3
import os
import json
import re
from pathlib import Path

def extract_questions(file_path):
    """Extract questions from a domain JS file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract question objects
    pattern = r'\{\s*question:\s*"([^"]+)"'
    matches = re.findall(pattern, content)
    return matches

def check_duplicates_in_domain(domain_num):
    """Check for duplicates within a single domain"""
    file_path = f'src/questions/domain{domain_num}.js'
    
    if not os.path.exists(file_path):
        print(f"❌ {file_path} not found")
        return []
    
    questions = extract_questions(file_path)
    total = len(questions)
    unique = len(set(questions))
    duplicates = total - unique
    
    print(f"\n📄 Domain {domain_num}:")
    print(f"   Total questions: {total}")
    print(f"   Unique questions: {unique}")
    
    if duplicates > 0:
        print(f"   ⚠️  Found {duplicates} duplicate(s)")
        # Find and display duplicates
        seen = set()
        dups = []
        for q in questions:
            if q in seen and q not in [d[0] for d in dups]:
                dups.append((q, questions.count(q)))
            seen.add(q)
        
        for dup_text, count in dups:
            print(f"      • '{dup_text[:60]}...' appears {count} times")
        return dups
    else:
        print(f"   ✅ No duplicates")
        return []

# Check all domains
print("🔍 Checking for duplicate questions across all domains...\n")
all_duplicates = {}
for i in range(1, 7):
    dups = check_duplicates_in_domain(i)
    if dups:
        all_duplicates[i] = dups

print("\n" + "="*60)
if all_duplicates:
    print("⚠️  SUMMARY: Found duplicates in the following domains:")
    for domain, dups in all_duplicates.items():
        print(f"   Domain {domain}: {len(dups)} duplicate question(s)")
else:
    print("✅ SUMMARY: No duplicates found across all domains!")
