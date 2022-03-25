function countIf(head, p) {
  let currentNode = head,
    counter = 0;
  while (currentNode) {
    if (p(currentNode.data)) counter++;
    currentNode = currentNode.next;
  }
  return counter;
}
