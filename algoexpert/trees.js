class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    depthFirstTraversal() {
        if(this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(this.value);
        if(this.right) {
            this.right.depthFirstTraversal();
        }
    }

    // depthFirstTraversal() {
    //     let stack = [ this ]

    //     while(stack.length > 0) {
    //         let current = stack.pop();
    //         console.log(current.value);
    //         if (current.right) stack.push(current.right)
    //         if (current.left) stack.push(current.left)
    //     }
    // }

    swap() {
        if(this.left) this.left.swap();
        if(this.right) this.right.swap();

        let temp = this.left;
        this.left = this.right;
        this.right = temp;

        return this;
    }

    contains(value) {
        if(this.value === value) {
            return true;
        }
        if(this.left && this.left.contains(value)) {
            return true;
        }
        if(this.right && this.right.contains(value)) {
            return true;
        }
        return false;
    }
}

/**
 *       a
 *     b  c
 *   d  e  f
 */

let a = new Node('a');
let b = new Node('b');
let d = new Node('d');
let e = new Node('e');
let c = new Node('c');
let f = new Node('f');

a.left = b;
a.right = c;
c.right = f;
b.left = d;
b.right = e;


a.depthFirstTraversal();

// console.log(a.contains('f'));
// console.log(a.contains('z'));


// function sum(root) {
//     if(! root) return 0;

//     return root.value + sum(root.left) + sum(root.right);
// }

function sum(root) {
    let total = 0;

    let queue = [ root ];

    while(queue.length > 0) {
        let current = queue.shift();
        total += current.value;
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }

    return total;
}

// function getSmallest(root) {
//     let smallest = Infinity;

//     let queue = [ root ];

//     while(queue.length > 0) {
//         let current = queue.shift();
        
//         smallest = Math.min(smallest, current.value);
        
//         if(current.left) queue.push(current.left)
//         if(current.right) queue.push(current.right)
//     }

//     return smallest;
// }


function getSmallest(root) {
    if(!root) return Infinity
    return Math.min(root.value, getSmallest(root.left), getSmallest(root.right));
}

function getBiggest(root) {
    if(!root) return -Infinity
    return Math.max(root.value, getBiggest(root.left), getBiggest(root.right));
}

function getMaxRootToLeaf(root) {
    if(!root) return -Infinity
    if(!root.left && !root.right) return root.val
    return root.val + Math.max(getMaxRootToLeaf(root.left), getMaxRootToLeaf(root.right))
}

let _3 = new Node(3);
let _11 = new Node(11);
let _4 = new Node(4);
let _2 = new Node(2);
let _41 = new Node(4);
let _1 = new Node(1);

_3.left = _11;
_3.right = _41;
_41.right = _1;
_11.left = _4;
_11.right = _2;


// console.log(sum(_3));
// console.log(getSmallest(_3));
// console.log(getBiggest(_3));
// console.log(getMaxRootToLeaf(_3))