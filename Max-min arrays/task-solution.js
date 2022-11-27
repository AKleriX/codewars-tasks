function solve(arr) {
  let sortArr = [...arr].sort((a, b) => a - b),
    resArr = [];
  while (sortArr.length) resArr.push(resArr.length % 2 ? sortArr.shift() : sortArr.pop());
  return resArr;
}
