const candles = (candlesNumber, makeNew) => {
  let counter = candlesNumber,
    leftover = candlesNumber;
  while (leftover >= makeNew) {
    counter += (leftover / makeNew) | 0;
    leftover = ((leftover % makeNew) + leftover / makeNew) | 0;
  }
  return counter;
};
