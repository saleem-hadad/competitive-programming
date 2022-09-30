class Node{
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const isSameTree = (root1, root2) => {
    if(!root1 && !root2) return true
    if(!root1 || !root2) return false
    if(root1.value != root2.value) return false
    
    return isSameTree(root1.left, root2.left) == true && isSameTree(root1.right, root2.right) == true
}

const treeOne = new Node(1, new Node(2), new Node(3))
const treeTwo = new Node(1, new Node(2), new Node(3))

console.log(isSameTree(treeOne, treeTwo)) // true

/*
     1         1
   2   3     2   3
*/