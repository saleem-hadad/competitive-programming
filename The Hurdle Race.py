#!/bin/python

import sys

n,k = raw_input().strip().split(' ')
n,k = [int(n),int(k)]
height = map(int, raw_input().strip().split(' '))
m = max(height)
if m - k >= 0:
    print m - k
else:
    print 0
