#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,q;
    cin >> n >> q;

    vector <vector <int> > s(n,vector <int> ());
    int lastAnswer=0;
    for (int i=0;i<q;i++) {
        int t,x,y;
        cin >> t >> x >> y;

        if (t==1) {
            s[(x^lastAnswer)%n].push_back(y);
        }
        else {
            lastAnswer=s[(x^lastAnswer)%n][y%s[(x^lastAnswer)%n].size()];
            cout << lastAnswer << endl;
        }
    }
    return 0;
}
