function productSum(array, depth = 1) {
  if (!Array.isArray(array)) return array

  let total = 0
  for (item of array) {
    total += productSum(item, depth + 1)
  }

  return depth * total
}

console.log(productSum([5, 2, [2, [2, [1]]]]))
