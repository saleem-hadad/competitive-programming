function isMonotonic(array) {
  let isUp = true
  let isDown = true

  for (let index = 1; index < array.length; index++) {
    let current = array[index]
    let prev = array[index - 1]

    if (current == prev) continue

    if (current > prev) isDown = false
    else isUp = false
  }

  return isUp || isDown
}
