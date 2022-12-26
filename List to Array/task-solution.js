const listToArray = (list) => {
  let head = list,
    arr = [];
  while (head) {
    arr.push(head.value);
    head = head.next;
  }
  return arr;
};
