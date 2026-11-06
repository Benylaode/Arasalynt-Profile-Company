import re

path = 'public/images/our-solution/projects/data-ai/agentic-ai-management.svg'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

print('SVG Length:', len(text))
vb = re.search(r'viewBox="([^"]+)"', text)
if vb:
    print('viewBox:', vb.group(1))

# Find rects and positions
rects = re.findall(r'<rect[^>]+>', text)
for r in rects[:10]:
    print('rect:', r[:120])

# Find texts or patterns
patterns = re.findall(r'<pattern[^>]+>', text)
for p in patterns:
    print('pattern:', p)

