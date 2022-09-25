#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main() {
    int n, m, x, y, w, max=0; 
    scanf("%i", &n);
    int arr[n][n];
    for(int i = 0; i< n; i++)
        for(int j = 0; j < n; j++)
            arr[i][j]=0;
    
    scanf("%i", &m);
    for(int a0 = 0; a0 < m; a0++){
        scanf("%i %i %i", &x, &y, &w);
        int startX = x-(w-1);
        int startY = y-(w-1);
        int endX = x+w;
        int endY = y+w;
        for(int k=0; k<=w; k++){
            for(int i = startX; i < endX; i++){
                for(int j = startY; j < endY; j++){
                    if (i >= 0 && j >= 0 && i < n && j < n){
                        arr[i][j] += 1;
                        if(arr[i][j] > max){
                            max = arr[i][j];
                        }
                    }
                }
            }
            startX += 1;
            startY += 1;
            endX -= 1;
            endY -= 1;
        }
    }
    printf("%d", max);
    return 0;
}