function solve(n, k) {
  let currentNum = n.toString();
  for (let i = 0; i < k; i++) {
    let delNums = Array.from(
        { length: currentNum.length },
        (_, i) => +(currentNum.slice(0, i) + currentNum.slice(i + 1)),
      ),
      minIdx = delNums.indexOf(Math.min.apply(null, delNums));
    currentNum = currentNum.slice(0, minIdx) + currentNum.slice(minIdx + 1);
  }
  return currentNum;
}
