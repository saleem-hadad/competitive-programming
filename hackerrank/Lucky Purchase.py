#!/bin/python

import sys

def isValid(value):
    fours=0
    sevens=0
    n=str(value)
    num=len(n)
    for i in range(num):
        if n[i] == '4':
            fours += 1
        elif n[i] == '7':
            sevens += 1
        else:
            return False
    if sevens == fours:
        return True
    return False

min=10000000000
one=''
if __name__ == "__main__":
    n = int(raw_input().strip())
    for a0 in xrange(n):
        name, value = raw_input().strip().split(' ')
        name, value = [str(name), int(value)]
        if isValid(value):
            if value < min:
                min = value
                one = name
    print one if one != '' else -1
