/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
*/

const createLinkedList = (values) => {
  if (values.length == 0) return null
  let head = new Node(values[0])
  let tail = head

  for (let index = 1; index < values.length; index++) {
    tail.next = new Node(values[index])
    tail = tail.next
  }

  return head
}
