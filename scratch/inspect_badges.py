import re

path = 'public/images/our-solution/projects/data-ai/agentic-ai-management.svg'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect text around rects and paths in the dark blue badges
idx1 = text.find('Chatbot Serbaguna')
print('Index of Chatbot Serbaguna:', idx1)
if idx1 == -1:
    # Maybe it's vector paths!
    print('Not plain text!')

# Let's see the paths around x="58" y="588" and x="748" y="756"
for marker in ['y="588"', 'y="756"']:
    idx = text.find(marker)
    if idx != -1:
        print(f"=== Around {marker} ===")
        print(text[idx:idx+1500])

