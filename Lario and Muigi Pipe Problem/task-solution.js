const pipeFix = (numbers) =>
  Array.from({ length: numbers[numbers.length - 1] - numbers[0] + 1 }, (_, i) => numbers[0] + i);
