function bubbleSort(array) {
  let isSorted = false
  let counter = 0

  while (!isSorted) {
    isSorted = true

    for (let index = 1; index <= array.length - counter; index++) {
      let prevItem = array[index - 1]
      let currentItem = array[index]
      if (currentItem < prevItem) {
        array[index - 1] = currentItem
        array[index] = prevItem
        isSorted = false
      }
    }

    counter++
  }

  return array
}
