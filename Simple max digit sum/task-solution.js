function solve(n) {
  let digit = [...n.toString()],
    bestNum = n,
    sum = digit.reduce((s, d) => s + +d, 0);
  for (let i = digit.length - 2; i >= 0; i--) {
    if (+digit[i] - 1 >= 0) {
      let currentNum =
          digit.slice(0, i).join('') + (+digit[i] - 1) + '9'.repeat(digit.length - i - 1),
        currentSum = [...currentNum.toString()].reduce((s, d) => s + +d, 0);
      if (sum < currentSum) {
        sum = currentSum;
        bestNum = +currentNum;
      }
    }
  }
  return bestNum;
}
