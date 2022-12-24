function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  let head = null;
  for (let i = 3; i > 0; i--) head = push(head, i);
  return head;
}
