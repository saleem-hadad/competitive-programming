#!/bin/python

import sys

def sockMerchant(n, ar):
    d = {}
    counter = 0
    for i in range(n):
        if not d.has_key(ar[i]):
            d[ar[i]] = 1
        else:
            counter += 1
            del d[ar[i]]
    return counter

n = int(raw_input().strip())
ar = map(int, raw_input().strip().split(' '))
result = sockMerchant(n, ar)
print(result)
