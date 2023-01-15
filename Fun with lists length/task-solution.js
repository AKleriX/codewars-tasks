const length = (head, len = 0) => (head ? length(head.next, len + 1) : len);
