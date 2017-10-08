#!/bin/python

import sys

lefts = '{[('
rights = '}])'
closes = {a:b for a,b in zip(rights,lefts)}

def isBalanced(s):    
    stack = []
    for c in s:
        if c in lefts:
            stack.append(c)
        elif c in rights:
            if not stack or stack.pop() != closes[c]:
                return False
    return not stack

if __name__ == "__main__":
    t = int(raw_input().strip())
    for a0 in xrange(t):
        s = raw_input().strip()
        print "YES" if isBalanced(s) else "NO"