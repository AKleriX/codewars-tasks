function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function append(listA, listB) {
  return listA
    ? listA.next
      ? push(append(listA.next, listB), listA.data)
      : push(listB, listA.data)
    : listB;
}
