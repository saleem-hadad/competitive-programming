#include <stdio.h>

int main() {
    int x1, v1, x2, v2; 
    scanf("%i %i %i %i", &x1, &v1, &x2, &v2);
    printf("%s", ((v1-v2) <= 0) ? "NO" : (((x2 - x1)/(v1 - v2) >= 0) && ((x2 - x1)%(v1 - v2) == 0)) ? "YES":"NO");
    return 0;
}
