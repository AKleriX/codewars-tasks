function sortByGuide(arr, guide) {
  let arrForSort = arr.filter((n, i) => guide[i] !== -1),
    guideForSort = guide.filter((n) => n !== -1);
  arrForSort = arrForSort.map((n, i) => [n, guideForSort[i]]);
  arrForSort.sort((a, b) => a[1] - b[1]);
  return arr.map((n, i) => (guide[i] === -1 ? n : arrForSort.shift()[0]));
}
