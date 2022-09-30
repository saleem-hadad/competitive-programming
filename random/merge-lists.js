class Node {
	constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const mergeLists = (head1, head2) => {
  let current1 = head1
  let current2 = head2
  let tail = null
  let head = null

  if (current1.value < current2.value) {
    tail = current1
    head = current1
    current1 = current1.next
  } else {
    tail = current2
    head = current2
    current2 = current2.next
  }

  while (current1 && current2) {
    if (current1.value < current2.value) {
      tail.next = current1
      current1 = current1.next
    } else {
      tail.next = current2
      current2 = current2.next
    }

    tail = tail.next
  }

  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2

  return head
}


let firstList = new Node(1, new Node(5, new Node(10)))

let secondList = new Node(0, new Node(3, new Node(6)))


const printLinkedList = (head) => {
  process.stdout.write(head.value + " -> " + (head.next == null ? "NULL\n" : ""));
  if(head.next != null) {
    printLinkedList(head.next);
  }
}

printLinkedList(mergeLists(firstList, secondList))