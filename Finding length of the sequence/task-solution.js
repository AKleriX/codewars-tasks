const lengthOfSequence = function (arr, n) {
  let nCounter = arr.filter((el) => el === n).length;
  return nCounter !== 2 ? 0 : arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1).length;
};
