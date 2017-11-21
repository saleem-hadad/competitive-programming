nums = int(raw_input())
s = raw_input()

level = 0
counter = 0

for c in s:
    if c == 'D':
        level -= 1
    elif c == 'U':
        level += 1
    
    if level == 0 and c == 'U':
        counter += 1
print counter