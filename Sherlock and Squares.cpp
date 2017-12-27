#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int tests, a, b;
    cin >> tests;

    for(int index = 0; index < tests; index++){
        cin >> a >> b;

        int count = 0;
        int number = 0;
        for(number = a; number <= b; number++) {
            int temp = int(sqrt(number));
            if(pow(temp, 2) == number){
               count++;
               number += temp * 2;
            }
        }

        cout << count << endl;
    }
    return 0;
}