const buy = function (x, arr) {
  let res = null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < x) {
      let secondVal = x - arr[i];
      for (let j = i + 1; j < arr.length; j++)
        if (arr[j] === secondVal) {
          res = [i, j];
          break;
        }
    }
    if (res) break;
  }
  return res;
};
