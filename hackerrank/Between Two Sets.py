import sys
from functools import reduce
from fractions import gcd

input()
a = map(int,input().strip().split())
b = map(int,input().strip().split())
lcm_a = reduce(lambda x,y: x*y//gcd(x,y), a)
gcd_b = reduce(gcd, b)
print(sum(1 for x in range(lcm_a,gcd_b+1,lcm_a) if gcd_b%x==0))