function knapsackLight(value1, weight1, value2, weight2, maxW) {
  const pair1 = [value1, weight1],
    pair2 = [value2, weight2],
    max = Math.max(value1, value2) === value1 ? pair1 : pair2,
    min = max === pair1 ? pair2 : pair1;
  let sum = 0;
  if (maxW >= max[1]) {
    sum += max[0];
    maxW -= max[1];
  }
  if (maxW >= min[1]) sum += min[0];
  return sum;
}
