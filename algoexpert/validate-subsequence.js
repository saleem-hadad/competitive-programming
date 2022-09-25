function isValidSubsequence(array, sequence) {
    var ai = 0;
    var si = 0;
    while(ai < array.length) {
      if(sequence[si] == array[ai]) {
        si++;
        if(si == sequence.length) {
          return true;
        }
      }
  
      ai++;
    }
  
    return false;
}