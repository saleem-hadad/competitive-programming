#!/bin/python

import sys

def bonAppetit(n, k, b, ar):
    if ((sum(ar) - ar[k])/2)  == b:
        return "Bon Appetit"
    else:
        return b - ((sum(ar) - ar[k])/2)

n, k = raw_input().strip().split(' ')
n, k = [int(n), int(k)]
ar = map(int, raw_input().strip().split(' '))
b = int(raw_input().strip())
result = bonAppetit(n, k, b, ar)
print(result)
