class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    depthFirstTraversal() {
        console.log(this.value);
        if(this.left) {
            this.left.depthFirstTraversal();
        }
        if(this.right) {
            this.right.depthFirstTraversal();
        }
    }

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


a.swap().depthFirstTraversal();

// console.log(a.contains('f'));
// console.log(a.contains('z'));