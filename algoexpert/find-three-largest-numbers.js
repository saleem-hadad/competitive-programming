function findThreeLargestNumbers(array) {
  let result = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ]

  for (let index = 0; index < array.length; index++) {
    let currentNumber = array[index]

    if (currentNumber > result[2]) {
      result[0] = result[1]
      result[1] = result[2]
      result[2] = currentNumber
    } else if (currentNumber > result[1]) {
      result[0] = result[1]
      result[1] = currentNumber
    } else if (currentNumber > result[0]) {
      result[0] = currentNumber
    }
  }

  return result
}
