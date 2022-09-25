def Insert(head, data):
    if head == None:
        return Node(data, None)
    else:
        if head.next == None:
            head.next = Node(data, None)
        else:
            Insert(head.next, data)
        return head