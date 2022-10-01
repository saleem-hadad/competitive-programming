class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let f = new Node('f');

a.left = b;
a.right = c;
c.right = f;


/*
       a
      b c
        f
*/

let maxLevel = 0;
const leftView = (root, level = 1) => {
    if(!root) return;

    if(maxLevel < level) {
        console.log(root.value)
        maxLevel = level
    }
    
    leftView(root.left, level + 1)
    leftView(root.right, level + 1)
}

leftView(a)