const priceIsRight = (numbers, target) =>
  numbers.filter((n) => n <= target).sort((a, b) => b - a)[0];
