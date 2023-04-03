function lastIndexOf(head, value) {
  let currentNode = head,
    lastIdx = -1,
    idxCounter = 0;
  while (currentNode !== null) {
    if (currentNode.data === value) lastIdx = idxCounter;
    idxCounter++;
    currentNode = currentNode.next;
  }
  return lastIdx;
}
