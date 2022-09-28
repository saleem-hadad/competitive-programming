const pairProduct = (numbers, targetProduct) => {
  let prevNumbers = {}
  for (let index = 0; index < numbers.length; index++) {
    if (targetProduct % numbers[i] != 0) continue
    let complement = targetProduct / numbers[index]

    if (complement in prevNumbers) {
      return [prevNumbers[complement], index]
    }

    prevNumbers[numbers[index]] = index
  }
}
