const addAll = (numbers) => {
  if (numbers.length <= 1) return 0;
  numbers.sort((a, b) => a - b);
  let totalCost = 0;
  while (numbers.length > 1) {
    const sum = numbers[0] + numbers[1];
    totalCost += sum;
    numbers.splice(0, 2, sum);
    numbers.sort((a, b) => a - b);
  }
  return totalCost;
};
