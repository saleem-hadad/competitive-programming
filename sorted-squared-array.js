const isNegative = (number) => number < 0;
 
const mergeArrays = (negArray, posArray) => {
	let result = [];
	let maxIndex = negArray.length + posArray.length;
	let negIndex = 0;
	let posIndex = 0;

while((negIndex + posIndex) < maxIndex) {
	let negNumber = negIndex < negArray.length ? negArray[negIndex] : null;
  let posNumber = posIndex < posArray.length ? posArray[posIndex] : null;
  
  if(negNumber == null) {
  	result.push(posNumber);
  	posIndex++;
  continue;
  }
  
  if(posNumber == null) {
  	result.push(negNumber);
  	negIndex++;
  continue;
  }
  
  if(negNumber < posNumber) {
  result.push(negNumber);
  negIndex++;
  }else {
  result.push(posNumber);
  posIndex++;
  }
  }
  
  return result;
}

function sortedSquaredArray(array) {
  let negArray = [];
  let posArray = [];

  for (let number of array) {
    let square = number*number;
    if(isNegative(number)) {
      negArray = [square, ...negArray];
      continue;
    }

    posArray.push(square)
  }

	return mergeArrays(negArray, posArray);
}


// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
