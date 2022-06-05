function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function shuffleMerge(first, second, counter = 0) {
  return first || second
    ? (!(counter % 2) && first) || !second
      ? new Node(first.data, shuffleMerge(first.next, second, ++counter))
      : new Node(second.data, shuffleMerge(first, second.next, ++counter))
    : null;
}
