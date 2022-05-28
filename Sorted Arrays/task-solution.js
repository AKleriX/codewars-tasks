function nthSmallest(...arr) {
  let smallIdx = arr[arr.length - 1],
    currentArr = arr.slice(0, arr.length - 1).map((a) => [...a]),
    resArr = [];
  while (resArr.length < smallIdx) {
    let min = Infinity,
      idx = -1;
    for (let i = 0; i < currentArr.length; i++)
      if (min > currentArr[i][0]) {
        min = currentArr[i][0];
        idx = i;
      }
    resArr.push(currentArr[idx].shift());
  }
  return resArr.pop();
}
