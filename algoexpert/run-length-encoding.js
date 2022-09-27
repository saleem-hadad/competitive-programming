function printRun(letter, counter, result) {
  if (letter == null) return result

  let div = Math.floor(counter / 9)
  let rem = counter % 9

  while (div > 0) {
    result += '9' + letter
    div--
  }

  if (rem != 0) {
    result += rem + letter
  }
  return result
}

function runLengthEncoding(string) {
  let counter = 1
  let index = 0
  let result = ''
  let prevLetter = null

  while (index < string.length) {
    let letter = string[index]

    if (letter == prevLetter) {
      counter++
    } else {
      result = printRun(prevLetter, counter, result)
      counter = 1
    }

    prevLetter = letter
    index++
  }

  result = printRun(prevLetter, counter, result)

  return result
}
