def reverse_list(node):
    prev = None
    current = node
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev