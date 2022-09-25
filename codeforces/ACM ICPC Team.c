#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int n, m; 
    scanf("%d %d",&n,&m);
    char *t[n];
    for(int topic_i = 0; topic_i < n; topic_i++){
       t[topic_i] = (char *)malloc(1024 * sizeof(char));
       scanf("%s",t[topic_i]);
    }
    int k, mk = 0, ka = 0;
    for(int i = 0; i < n-1; i++) {
        for(int j = i+1; j < n; j++) {
            k = 0;
            for(int k = 0; k < m; k++) {
                if(t[i][k] == '1' || t[j][k] == '1')
                    k++;
                if(mk < k) {
                    mk = k;
                    ka = 0;
                }
                if(k == mk)
                    ka++;
            }
        }
    }
    printf("%d\n%d\n", mk, ka);
    return 0;
}
