/*
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

const treeLevels = (root) => {
  if (!root) return []
  let queue = [[root]]
  let result = []
  while (queue.length) {
    let currentLevelNodes = queue.shift()
    let nextLevelNodes = []
    let levelValues = []
    for (let node of currentLevelNodes) {
      levelValues.push(node.val)
      if (node.left) nextLevelNodes.push(node.left)
      if (node.right) nextLevelNodes.push(node.right)
    }

    result.push(levelValues)

    if (nextLevelNodes.length > 0) {
      queue.push(nextLevelNodes)
    }
  }

  return result
}
