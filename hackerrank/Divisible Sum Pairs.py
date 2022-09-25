#!/bin/python

import sys

def divisibleSumPairs(n, k, ar):
    counter = 0
    for i in range(n):
        for j in range(i+1, n):
            res = ar[i] + ar[j]
            if res % k == 0:
                counter += 1
    return counter

n, k = raw_input().strip().split(' ')
n, k = [int(n), int(k)]
ar = map(int, raw_input().strip().split(' '))
result = divisibleSumPairs(n, k, ar)
print(result)