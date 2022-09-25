function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    let minItemIndex = index
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[minItemIndex]) {
        minItemIndex = j
      }
    }

    let temp = array[index]
    array[index] = array[minItemIndex]
    array[minItemIndex] = temp
  }

  return array
}
