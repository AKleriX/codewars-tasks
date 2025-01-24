function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

const reverse = (list) => {
  if (!list) return null;
  const origHead = list;
  let prev = new Node(list.data);
  list = list.next;
  while (list) {
    const next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  origHead.data = prev.data;
  origHead.next = prev.next;
};
