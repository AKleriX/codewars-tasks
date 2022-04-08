const filter = (head, p) =>
  head ? (!p(head.data) ? filter(head.next, p) : new Node(head.data, filter(head.next, p))) : head;
