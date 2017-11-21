#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

long int solve(long int n) {
    unsigned int c = 0;
    while(n)
    {
        if(! (n&1))
        {
            c++;
        }
        n >>= 1;
    }
    return pow(2, c);
}

int main() {
    long int n; 
    scanf("%li", &n);
    long int result = solve(n);
    printf("%ld\n", result);
    return 0;
}