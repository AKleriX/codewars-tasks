function Mormons(startingNumber, reach, target) {
  let currentNumber = startingNumber,
    missionCounter = 0;
  while (currentNumber < target) {
    currentNumber += currentNumber * reach;
    missionCounter++;
  }
  return missionCounter;
}
