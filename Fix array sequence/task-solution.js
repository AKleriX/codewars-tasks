function solve(arr) {
  let num = arr.find((n, _, a) => !a.includes(n * 3) && !a.includes(n / 2)),
    sortArr = [num],
    currentArr = [...arr].map((n) => [n, n !== num]);
  while (sortArr.length < arr.length) {
    for (let i = 0; i < currentArr.length; i++)
      if (currentArr[i][0] === num * 2 || currentArr[i][0] === num / 3) {
        num = currentArr[i][0];
        currentArr[i][1] = false;
        break;
      }
    sortArr.push(num);
  }
  return sortArr;
}
