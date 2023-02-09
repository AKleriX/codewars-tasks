function howManyGifts(maxBudget, gifts) {
  let sortGifts = [...gifts].sort((a, b) => a - b),
    counter = 0;
  for (let i = 0; i < sortGifts.length; i++) {
    maxBudget -= sortGifts[i];
    if (maxBudget < 0) break;
    counter++;
  }
  return counter;
}
