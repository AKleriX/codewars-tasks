function stringify(list) {
  let head = list,
    data = [];
  while (head) {
    data.push(head.data);
    head = head.next;
  }
  data.push('null');
  return data.join(' -> ');
}
