function moveElementToEnd(array, toMove) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex < rightIndex) {
    let leftItem = array[leftIndex]
    let rightItem = array[rightIndex]

    if (leftItem == toMove && rightItem != toMove) {
      array[leftIndex] = rightItem
      array[rightIndex] = leftItem
      leftIndex++
      rightIndex--
      continue
    }

    if (rightItem == toMove) {
      rightIndex--
    }

    if (leftItem != toMove) {
      leftIndex++
    }
  }

  return array
}
