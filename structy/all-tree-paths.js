/**
 Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.
 */

const allTreePaths = (root) => {
  let result = []
  allTreePathsHelper(root, [], result)
  return result
}

const allTreePathsHelper = (root, prevNodesValues, result) => {
  if (!root) return
  if (!root.left && !root.right) {
    result.push([...prevNodesValues, root.val])
    return
  }

  allTreePathsHelper(root.left, [...prevNodesValues, root.val], result)
  allTreePathsHelper(root.right, [...prevNodesValues, root.val], result)
}
