const bottomRightValue = (root) => {
  let queue = [[root]]
  while (queue.length) {
    let currentLevelNodes = queue.shift()
    let nextLevelNodes = []
    for (let node of currentLevelNodes) {
      if (node.left) nextLevelNodes.push(node.left)
      if (node.right) nextLevelNodes.push(node.right)
    }
    if (nextLevelNodes.length == 0) {
      return currentLevelNodes[currentLevelNodes.length - 1].val
    }
    queue.push(nextLevelNodes)
  }
}
