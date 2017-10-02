#!/bin/python

import sys
import operator 

def migratoryBirds(n, ar):
    d = {}
    for i in range(n):
        if not d.has_key(ar[i]):
            d[ar[i]] = 1
        else:
            d[ar[i]] += 1
    return max(d.iteritems(), key=operator.itemgetter(1))[0]
n = int(raw_input().strip())
ar = map(int, raw_input().strip().split(' '))
result = migratoryBirds(n, ar)
print(result)