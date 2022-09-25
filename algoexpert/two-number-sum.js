function twoNumberSum(array, targetSum) {
    const comps = {}
    for(let num of array) {
      const comp = targetSum - num;
      if(comp in comps) {
        return [comp, num];
      }
  
      comps[num] = true;
    }
  
    return [];
}