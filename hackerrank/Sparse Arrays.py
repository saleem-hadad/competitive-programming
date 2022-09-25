n = int(raw_input())
d = {}
for i in range(n):
    key = raw_input()
    if not d.has_key(key):
        d[key] = 1
    else:
        d[key] += 1
q = int(raw_input())
for i in range(q):
    key = raw_input()
    if d.has_key(key):
        print (d[key])
    else:
        print(0)