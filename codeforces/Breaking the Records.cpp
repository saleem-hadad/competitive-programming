#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, h=0, l=0, hc=0, hl=0;
    cin >> n;
    for(int i=0; i<n; i++){
        int num;
        cin >> num;
        if (i ==0){
            h=num;
            l=num;
        }
        if(num > h){
            h=num;
            hc++;
        }
        if(num < l){
            l=num;
            hl++;
        }
    }
    cout << hc << " " << hl;
    return 0;
}
