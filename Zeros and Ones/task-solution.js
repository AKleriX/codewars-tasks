function replaceZero(arr) {
  let maxLengthOnes = 0,
    bestIndex = 0,
    currentLength = 0,
    currentIndex = 0,
    pastLength = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (currentLength + pastLength >= maxLengthOnes) {
      maxLengthOnes = currentLength + pastLength;
      bestIndex = currentIndex;
    }
    if (!arr[i]) {
      pastLength = currentLength;
      currentLength = 0;
      currentIndex = i;
    } else currentLength++;
  }
  return bestIndex;
}
