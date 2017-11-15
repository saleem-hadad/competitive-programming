#!/bin/python

import sys

def tripleRecursion(n, m, k):
    arr = [[0 for col in range(n)] for row in range(n)]
    for i in range(n):
        for j in range(n):
            if i == 0 and j == 0:
                arr[i][j] = m
            else: 
                if i == j:
                    arr[i][j] = arr[i-1][j-1] + k
                if i > j:
                    arr[i][j] = arr[i-1][j] - 1
                if i < j:
                    arr[i][j] = arr[i][j-1] - 1
    for i in range(n):
        for j in range(n):
            print arr[i][j],
        print ""
                

if __name__ == "__main__":
    n, m, k = raw_input().strip().split(' ')
    n, m, k = [int(n), int(m), int(k)]
    tripleRecursion(n, m, k)
