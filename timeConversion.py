#!/bin/python3

import math
import os
import random
import re
import sys

def timeConversion(s):
    h = int(s[0:2])
    time = s[len(s) - 2:]
    s = s[2:len(s) - 2]
    
    if time == 'PM' and h != 12:
        h += 12
        
    if h <= 9:
        return "0" + str(h) + s
    if (h == 24) or (h == 12 and time == 'AM'):
        return "00" + s

    return str(h) + s

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
