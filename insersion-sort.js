function insertionSort(array) {
  let unsortedIndex = 1

  while (unsortedIndex < array.length) {
    let sortedIndex = unsortedIndex

    while (sortedIndex > 0) {
      let currentSortedItem = array[sortedIndex]
      let prevSortedItem = array[sortedIndex - 1]

      if (currentSortedItem >= prevSortedItem) {
        break
      }

      array[sortedIndex] = prevSortedItem
      array[sortedIndex - 1] = currentSortedItem

      sortedIndex--
    }

    unsortedIndex++
  }

  return array
}
