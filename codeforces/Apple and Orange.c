#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int s, t, a, b, m, n, counterA=0, counterO=0; 
    scanf("%d %d",&s,&t);
    scanf("%d %d",&a,&b);
    scanf("%d %d",&m,&n);
    for(int apple_i = 0; apple_i < m; apple_i++){
        int d;
        scanf("%d", &d);
        counterA = (((a+d) >= s) && (a+d) <= t) ? counterA + 1 : counterA;
    }
    for(int orange_i = 0; orange_i < n; orange_i++){
        int d;
        scanf("%d", &d);
        counterO = (((b+d) >= s) && (b+d) <= t) ? counterO + 1 : counterO;
    }
    printf("%d\n%d", counterA, counterO);
    return 0;
}