class Node {
	constructor(value) {
        this.value = value;
        this.next = null;
    }

    printLinkedList() {
        process.stdout.write(this.value + " -> " + (this.next == null ? "NULL\n" : ""));
        if(this.next != null) {
            this.next.printLinkedList();
        }
    }

    static createLinkedListFromArray(array) {
        if (array.length === 0) return null;
        const head = new Node(array[0]);
        let tail = head;
        for (let i = 1; i < array.length; i++) {
            tail.next = new Node(array[i]);
            tail = tail.next;
        }

        return head;
    }

    zipWith(head) {
        let tail = this;
        let current1 = this.next;
        let current2 = head;
        let toggle = true;
    
        while(current1 != null && current2 != null) {
            if(toggle) {
                tail.next = current2;
                current2 = current2.next;
            }else {
                tail.next = current1;
                current1 = current1.next;
            }   
    
            tail = tail.next;
            toggle = !toggle;
        }
    
        if(current1 !== null) tail.next = current1
        if(current2 !== null) tail.next = current2
    
        return this;
    }

    reverse(prev = null) {
        if(this.next == null) {
            this.next = prev;
            return this;
        }

        const next = this.next;
        this.next = prev;
        return next.reverse(this);
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
}

const a = Node.createLinkedListFromArray(['a', 'b', 'c']);
const x = Node.createLinkedListFromArray(['x', 'y', 'z']);

a.zipWith(x).reverse().printLinkedList();