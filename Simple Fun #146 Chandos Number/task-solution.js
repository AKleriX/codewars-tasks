const nthChandosNumber = (n) => {
  const powersOfFive = [];
  let power = 5;

  for (let i = 0; i < 15; i++) {
    powersOfFive.push(power);
    power *= 5;
  }

  const chandosNumbers = new Set(),
    totalCombinations = 1 << powersOfFive.length;

  for (let i = 1; i < totalCombinations; i++) {
    let sum = 0;
    for (let j = 0; j < powersOfFive.length; j++) if (i & (1 << j)) sum += powersOfFive[j];
    chandosNumbers.add(sum);
  }

  const sortedChandosNumbers = Array.from(chandosNumbers).sort((a, b) => a - b);

  return sortedChandosNumbers[n - 1];
};
