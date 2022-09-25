function generateDocument(characters, document) {
  if (document == '') return true

  let charactersCount = {}
  for (char of characters) {
    if (char in charactersCount) {
      charactersCount[char]++
    } else {
      charactersCount[char] = 1
    }
  }

  for (char of document) {
    if (char in charactersCount && charactersCount[char] > 0) {
      charactersCount[char]--
    } else {
      return false
    }
  }

  return true
}
