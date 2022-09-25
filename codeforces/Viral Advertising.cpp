#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int days, count=0, acc=5;
    cin >> days;
    for(int i=1; i <= days; i++){
    	acc = floor(acc/2);
        count += acc;
        acc *= 3;
    }
    cout << count;
    return 0;
}