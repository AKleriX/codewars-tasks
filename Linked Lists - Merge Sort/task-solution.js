function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function mergeSort(list) {
  if (list === null || list.next === null) return list;
  let firstHalf = new Node(),
    secondHalf = new Node();
  frontBackSplit(list, firstHalf, secondHalf);
  return sortedMerge(mergeSort(firstHalf), mergeSort(secondHalf));
}
