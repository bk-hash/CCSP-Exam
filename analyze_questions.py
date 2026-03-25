import re
import os
from pathlib import Path

BASE = Path(__file__).parent / 'src' / 'questions'

def extract_array_content(text):
    m = re.search(r"const\s+questions\s*=\s*\[([\s\S]*?)\]\s*;", text)
    return m.group(1) if m else ''

def split_objects(array_text):
    # Split on patterns that end an object followed by a comma and newline
    parts = re.split(r"\},\s*\n", array_text)
    objs = []
    for i,p in enumerate(parts):
        s = p.strip()
        if not s:
            continue
        if not s.endswith('}'):
            s = s + ('}' if not s.endswith('}') else '')
        objs.append(s)
    return objs

field_re = {
    'question': re.compile(r"question:\s*[\"']([\s\S]*?)[\"']\s*(,|$)") ,
    'difficulty': re.compile(r"difficulty:\s*[\"'](easy|medium|hard|unknown)[\"']", re.IGNORECASE),
    'explanation': re.compile(r"explanation:\s*[\"']([\s\S]*?)[\"']\s*(,|$)")
}

summary = {}

for n in range(1,7):
    path = BASE / f'domain{n}.js'
    if not path.exists():
        print(f"Domain {n}: file not found ({path})")
        continue
    text = path.read_text(encoding='utf-8')
    arr = extract_array_content(text)
    objs = split_objects(arr)
    total = len(objs)
    counts = {'easy':0,'medium':0,'hard':0,'unknown':0}
    expl_count = 0
    expl_lengths = []
    short_explanations = []
    missing_difficulty = []

    for obj in objs:
        q = None
        d = 'unknown'
        e = None
        m = field_re['question'].search(obj)
        if m:
            q = m.group(1).strip()
        md = field_re['difficulty'].search(obj)
        if md:
            d = md.group(1).lower()
        me = field_re['explanation'].search(obj)
        if me:
            e = me.group(1).strip()

        if d in counts:
            counts[d] += 1
        else:
            counts['unknown'] += 1
            missing_difficulty.append(q or '<no question text>')

        if e:
            expl_count += 1
            expl_lengths.append(len(e))
            if len(e) < 40:
                short_explanations.append((q or '<no text>', len(e)))

    avg_expl_len = round(sum(expl_lengths)/len(expl_lengths),1) if expl_lengths else 0
    summary[n] = {
        'total': total,
        'counts': counts,
        'explanations': {
            'present': expl_count,
            'percent': round(100*expl_count/total,1) if total>0 else 0,
            'avg_length_chars': avg_expl_len,
            'short_examples': short_explanations[:5]
        },
        'missing_difficulty_examples': missing_difficulty[:5]
    }

# Print report
print('\nQuestion Difficulty & Explanation Report\n')
for n in range(1,7):
    if n not in summary:
        continue
    s = summary[n]
    print(f"Domain {n}:")
    print(f"  Total questions: {s['total']}")
    print(f"  Difficulty counts: easy={s['counts']['easy']} medium={s['counts']['medium']} hard={s['counts']['hard']} unknown={s['counts']['unknown']}")
    print(f"  Explanations: {s['explanations']['present']} present ({s['explanations']['percent']}%), avg length {s['explanations']['avg_length_chars']} chars")
    if s['explanations']['short_examples']:
        print(f"    Short explanation examples (<=40 chars):")
        for qtxt,ln in s['explanations']['short_examples']:
            print(f"      - ({ln} chars) {qtxt[:80]}")
    if s['missing_difficulty_examples']:
        print(f"    Missing difficulty examples:")
        for qtxt in s['missing_difficulty_examples']:
            print(f"      - {qtxt[:80]}")
    print('')

# Aggregate totals
tot = sum(summary[n]['total'] for n in summary)
expl_tot = sum(summary[n]['explanations']['present'] for n in summary)
print('Overall:')
print(f"  Total questions across domains: {tot}")
print(f"  Total explanations present: {expl_tot} ({round(100*expl_tot/tot,1)}%)\n")
