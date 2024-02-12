const numberOfFolds = (n) => {
  let currentGrids = 1,
    counter = 0;
  while (currentGrids < n) {
    currentGrids *= 2;
    counter++;
  }
  return counter;
};
