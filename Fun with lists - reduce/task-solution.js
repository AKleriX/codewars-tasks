function reduce(head, f, init) {
  let currentNode = head,
    acc = init;
  while (currentNode) {
    acc = f(acc, currentNode.data);
    currentNode = currentNode.next;
  }
  return acc;
}
