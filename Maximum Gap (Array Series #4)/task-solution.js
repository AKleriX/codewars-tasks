function maxGap(numbers) {
  let maxDif = 0,
    sortArr = [...numbers].sort((a, b) => a - b);
  for (let i = sortArr.length - 1; i > 0; i--)
    if (maxDif < sortArr[i] - sortArr[i - 1]) maxDif = sortArr[i] - sortArr[i - 1];
  return maxDif;
}
