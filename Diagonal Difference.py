#!/bin/python

import sys
import math


n = int(raw_input().strip())
a = []
for a_i in xrange(n):
    a_temp = map(int,raw_input().strip().split(' '))
    a.append(a_temp)
num1 = 0
num2 = n-1

dig1 = 0
dig2 = 0
for raw in a:
    dig1 += raw[num1]
    dig2 += raw[num2]
    num1 += 1
    num2 -= 1

print abs(dig1 - dig2)