function Node(data) {
  this.data = data;
  this.next = null;
}

const insertSort = (head) => (head ? sortedInsert(insertSort(head.next), head.data) : null);
