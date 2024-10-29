const sumOfRegularNumbers = (arr) => {
  let totalSum = 0,
    i = 0;

  while (i < arr.length - 2) {
    const step = arr[i + 1] - arr[i];
    let seqSum = arr[i],
      count = 1,
      j = i + 1;

    while (j < arr.length && arr[j] - arr[j - 1] === step) {
      seqSum += arr[j];
      count++;
      j++;
    }

    if (count >= 3) totalSum += seqSum;
    i += count > 1 ? count - 1 : 1;
  }

  return totalSum;
};
