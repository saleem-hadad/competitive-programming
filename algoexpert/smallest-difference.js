function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b);
    arrayTwo.sort((a,b) => a-b);
    
    let arrayOneIndex = 0;
    let arrayTwoIndex = 0;
    
    let smallestPairDistance = Number.MAX_SAFE_INTEGER;
    let result = [null, null];
    
    while(arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
        let arrayOneItem = arrayOne[arrayOneIndex];
        let arrayTwoItem = arrayTwo[arrayTwoIndex];
        let absulteDifference = Math.abs(arrayOneItem - arrayTwoItem);
    
      if(absulteDifference < smallestPairDistance) {
          smallestPairDistance = absulteDifference;
          result =  [arrayOneItem, arrayTwoItem];
          if(absulteDifference == 0) break;
      }
    
      if(arrayOneItem < arrayTwoItem) arrayOneIndex++;
      else arrayTwoIndex++;
    }
    
    return result;
  }