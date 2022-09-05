class Node {
	constructor(value) {
	this.value = value;
	this.next = null;
}
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// Input:  A -> B -> C -> D
// Output: D -> C -> B -> A

const reverseLinkedList = (head, prev = null) => {
    if (head === null) {
        return prev;
    }
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}

// const reverseLinkedList = (head) => {
// 	let prevNode = null;
// 	let currentNode = head;
// 	while(currentNode != null) {
//         let nextNode = currentNode.next;
//         currentNode.next = prevNode;
//         prevNode = currentNode;
//         currentNode = nextNode;
//     }

//     return prevNode;
// }

const printLinkedList = (head) => {
	let current = head;
	while(current != null) {
		console.log(current.value)
		current = current.next;
    }
}

printLinkedList(reverseLinkedList(a));
