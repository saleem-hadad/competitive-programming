/**
 Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
 */

const leafList = (root) => {
  if (!root) return []
  if (!root.left && !root.right) {
    return [root.val]
  }

  return [...leafList(root.left), ...leafList(root.right)]
}
