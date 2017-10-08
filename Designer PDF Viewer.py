import sys
import operator

hights = map(int, raw_input().strip().split(' '))
word = raw_input().strip()
letters = map(chr, range(97, 123))
zipped = {a:b for a,b in zip(letters, hights)}
zipped = {c: zipped[c] for c in word}
print len(word) * max(zipped.iteritems(), key=operator.itemgetter(1))[1]