function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function sortedMerge(first, second) {
  if (!first) return second;
  if (!second) return first;
  return first.data < second.data
    ? new Node(first.data, sortedMerge(first.next, second))
    : new Node(second.data, sortedMerge(first, second.next));
}
