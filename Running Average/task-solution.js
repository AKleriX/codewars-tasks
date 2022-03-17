function runningAverage() {
  let numbersSum = 0,
    numbersCounter = 0;
  return function (n) {
    numbersSum += n;
    numbersCounter++;
    return Math.round((numbersSum / numbersCounter) * 100) / 100;
  };
}
