function removeSmallest(n, arr) {
  let currentArr = [...arr];
  for (let i = 0; i < n; i++)
    currentArr.splice(currentArr.indexOf(Math.min.apply(null, currentArr)), 1);
  return currentArr;
}
