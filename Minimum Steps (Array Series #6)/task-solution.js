function minimumSteps(numbers, value) {
  let sortArr = [...numbers].sort((a, b) => a - b),
    steps = 0,
    sum = sortArr[0];
  while (sum < value) {
    steps++;
    sum += sortArr[steps];
  }
  return steps;
}
