function alexMistakes(numberOfKata, timeLimit) {
  let time = timeLimit - numberOfKata * 6,
    misCounter = 0,
    pushTime = 5;
  while (pushTime <= time) {
    time -= pushTime;
    pushTime *= 2;
    misCounter++;
  }
  return misCounter;
}
