/* Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

*/

const getKthLastElement = (head, k) => {
  let currentEl = head,
    counter = [];
  while (currentEl) {
    counter.push({ ...currentEl });
    currentEl = currentEl.next;
  }
  return counter.length <= k ? false : counter[counter.length - 1 - k];
};
