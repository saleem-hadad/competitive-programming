#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <assert.h>

int maxXor(int l, int r) {
    int max=0;
    for(int i=l; i<=r; i++){
        for(int j=i; j<=r; j++){
            if((i^j) > max){
                max = (i^j);
            }
        }
    }
    return max;
}
int main() {
    int l, r;
    scanf("%d", &l);
    scanf("%d", &r);
    printf("%d", maxXor(_l, _r));
    return 0;
}
