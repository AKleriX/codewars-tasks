const divNum = (a, b) => {
  if (a > b) return 'Error';
  let maxDiv = -1,
    bestNum = null;
  for (let i = a; i <= b; i++) {
    let num = i,
      divsCounter = 0;
    for (let j = 2; j <= num; j++) if (!(num % j)) divsCounter++;
    if (divsCounter > maxDiv) {
      maxDiv = divsCounter;
      bestNum = i;
    }
  }
  return bestNum;
};
