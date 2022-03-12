function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function removeDuplicates(head) {
  let currentNode = head;
  while (currentNode) {
    let tmpNode = currentNode;
    while (tmpNode && tmpNode.data === currentNode.data) tmpNode = tmpNode.next;
    currentNode.next = tmpNode;
    currentNode = currentNode.next;
  }
  return head;
}
