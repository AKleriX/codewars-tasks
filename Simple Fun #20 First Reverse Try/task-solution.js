function firstReverseTry(arr) {
  let currentArr = [...arr];
  [currentArr[0], currentArr[currentArr.length - 1]] = [
    currentArr[currentArr.length - 1],
    currentArr[0],
  ];
  return arr.length ? currentArr : [];
}
