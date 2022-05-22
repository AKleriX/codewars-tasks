const findDup = function (arr) {
  let uniqNums = new Set(),
    dubNum = null;
  for (let i = 0; i < arr.length; i++) {
    uniqNums.add(arr[i]);
    if (uniqNums.size !== i + 1) {
      dubNum = arr[i];
      break;
    }
  }
  return dubNum;
};
