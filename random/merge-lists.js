const mergeLists = (head1, head2) => {
  let current1 = head1
  let current2 = head2
  let tail = null
  let head = null

  if (current1.val < current2.val) {
    tail = current1
    head = current1
    current1 = current1.next
  } else {
    tail = current2
    head = current2
    current2 = current2.next
  }

  while (current1 && current2) {
    if (current1.val < current2.val) {
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
