function reverse(right) {
  let currentSum = [right[0]];
  for (let i = 1; i < right.length; i++) {
    let tmpLine = [right[i]];
    currentSum.reverse();
    for (let j = 0; j < currentSum.length; j++)
      tmpLine.push(currentSum[j] - tmpLine[tmpLine.length - 1]);
    currentSum = tmpLine.reverse();
  }
  return currentSum;
}
