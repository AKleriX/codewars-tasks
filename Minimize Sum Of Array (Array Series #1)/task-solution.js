function minSum(arr) {
  let sortArr = [...arr].sort((a, b) => a - b),
    sum = 0;
  for (let i = 0; i < sortArr.length / 2; i++) sum += sortArr[i] * sortArr[sortArr.length - 1 - i];
  return sum;
}
