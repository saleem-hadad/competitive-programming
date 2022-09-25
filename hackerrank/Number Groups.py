#!/bin/python

import sys

def sumOfGroup(k):
    d = k*(k+1)/2
    l = d**2 - (d-1)**2
    s=0
    while k > 0:
        s += l
        l -= 2 
        k -= 1
    return s

if __name__ == "__main__":
    k = int(raw_input().strip())
    answer = sumOfGroup(k)
    print answer