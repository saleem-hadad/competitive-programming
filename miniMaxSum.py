#!/bin/python3

import math
import os
import random
import re
import sys


def miniMaxSum(arr):
    t = 0
    mx = 0
    mn = 0
    
    for i in range(len(arr)):
        t += arr[i]
    mn = t
    for i in range(len(arr)):
        temp = t - arr[i]
        if temp > mx:
            mx = temp
        if temp < mn:
            mn = temp
    
    print(mn, mx)

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
