// input: names - unsorted array
// output: sorted array
sortme = function (names) {
  const mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    let firstHalf = mergeSort(arr.slice(0, (arr.length / 2) | 0)),
      secondHalf = mergeSort(arr.slice((arr.length / 2) | 0)),
      sortArr = [];
    while (firstHalf.length || secondHalf.length)
      if (firstHalf[0] < secondHalf[0] || !secondHalf.length) sortArr.push(firstHalf.shift());
      else sortArr.push(secondHalf.shift());
    return sortArr;
  };
  return mergeSort(names);
};
