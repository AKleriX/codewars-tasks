const findDeletedNumber = (arr, mixArr) =>
  arr.reduce((s, n) => s + n, 0) - mixArr.reduce((s, n) => s + n, 0);
