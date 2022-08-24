function arrayOperations(a, k) {
  let currentArr = [...a];
  for (let i = 1; i <= k; i++) {
    let maxEl = Math.max.apply(null, currentArr);
    currentArr = currentArr.map((n) => maxEl - n);
  }
  return currentArr;
}
