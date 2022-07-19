function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function sortedIntersect(first, second, obj = new Set()) {
  if (first === null || second === null) return null;
  if (first.data === second.data && !obj.has(first.data)) {
    obj.add(first.data);
    return new Node(first.data, sortedIntersect(first.next, second.next, obj));
  }
  return first.data > second.data
    ? sortedIntersect(first, second.next, obj)
    : sortedIntersect(first.next, second, obj);
}
