function maxSumBetweenTwoNegatives(a) {
  let sum = -1;
  for (let i = 0; i < a.length; i++)
    if (a[i] < 0 && i !== a.length - 1) {
      let currentSum = 0,
        j = i + 1;
      for (; a[j] >= 0 && j < a.length; j++) currentSum += a[j];
      if (currentSum > sum && a[j] < 0) sum = currentSum;
      i = j - 1;
    }
  return sum;
}
