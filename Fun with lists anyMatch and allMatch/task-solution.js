function anyMatch(head, p) {
  while (head)
    if (p(head.data)) return true;
    else head = head.next;
  return false;
}

function allMatch(head, p) {
  while (head)
    if (p(head.data)) head = head.next;
    else return false;
  return true;
}
