function removeDuplicatesFromLinkedList(linkedList) {
    let currentPointer = linkedList
    
    while(currentPointer != null) {
      let currentValue = currentPointer.value;
      let tail = currentPointer.next;
      while(tail) {
        if(tail.value == currentValue) {
          tail = tail.next
        }else {
          break;
        }
      }
      currentPointer.next = tail;
      currentPointer = tail;
    }
    return linkedList;
}
