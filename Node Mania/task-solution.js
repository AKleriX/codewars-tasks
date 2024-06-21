const searchKFromEnd = (linkedList, k) => {
  let fast = linkedList,
    slow = linkedList;
  while (k-- && fast) fast = fast.next;

  if (k >= 0) return null;

  while (fast) (fast = fast.next), (slow = slow.next);

  return slow ? slow.data : null;
};
