#include <iostream>
#include <vector>
using namespace std;

int upperMultipleFive(int number){
    return (((int)number/5) * 5 + 5);
}

int roundUpIfPossible(int number){
    return ((upperMultipleFive(number) - number) < 3) ?  upperMultipleFive(number) : number;
}

int main(){
    int n;
    cin >> n;
    vector<int> grades(n);
    
    for(int i = 0; i < n; i++){
        cin >> grades[i];
        grades[i] = (grades[i] >= 38) ? roundUpIfPossible(grades[i]) : grades[i];
    }

    for(ssize_t i = 0; i < grades.size(); i++){
        cout << grades[i] << endl;
    }
    return 0;
}
