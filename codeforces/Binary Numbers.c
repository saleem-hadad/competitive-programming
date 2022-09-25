#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int n, m=0, c=0;
    scanf("%d",&n);
    while(n != 0){
        if((n & 1) == 1){
            c++;
        }else {
            c=0;
        }
        n = n >> 1;
        if(c>m){
            m=c;
        }
    }
    printf("%d", m);
    return 0;
}
