function Node(data, next = null) {
  this.data = data === undefined ? null : data;
  this.next = next;
}

function reverse(head) {
  let currentNode = head,
    revList = null;
  while (currentNode) {
    revList = new Node(currentNode.data, revList);
    currentNode = currentNode.next;
  }
  return revList;
}
