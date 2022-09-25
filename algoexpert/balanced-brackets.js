class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    return this.data.length > 0 ? this.data.pop() : null
  }

  isEmpty() {
    return this.data.length == 0
  }
}

function getBracketType(bracketsTypesMapping, char) {
  var openingBrackets = Object.values(bracketsTypesMapping)
  var closingBrackets = Object.keys(bracketsTypesMapping)

  if (openingBrackets.includes(char)) return 'opening'
  if (closingBrackets.includes(char)) return 'closing'

  return null
}

// O(n) time | O(n) space
function balancedBrackets(string) {
  let stack = new Stack()
  let bracketsTypesMapping = { '}': '{', ']': '[', ')': '(' }

  let index = 0
  while (index < string.length) {
    let char = string[index]
    let bracketType = getBracketType(bracketsTypesMapping, char)

    if (bracketType == 'opening') {
      stack.push(char)
    } else if (bracketType == 'closing') {
      let lastOpeningBracket = stack.pop()

      if (!lastOpeningBracket) return false

      if (lastOpeningBracket != bracketsTypesMapping[char]) return false
    }

    index++
  }

  return stack.isEmpty()
}
