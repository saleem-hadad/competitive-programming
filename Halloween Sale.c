#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int howManyGames(int p, int d, int m, int s) {
    int counter = 0, currentPrice=p;
    while(s >= currentPrice){
        counter++;
        s -= currentPrice;
        currentPrice = (currentPrice - d) >= m ? currentPrice - d : m;
    }
    return counter;
}

int main() {
    int p, d, m, s;
    scanf("%i %i %i %i", &p, &d, &m, &s);
    int answer = howManyGames(p, d, m, s);
    printf("%d\n", answer);
    return 0;
}
