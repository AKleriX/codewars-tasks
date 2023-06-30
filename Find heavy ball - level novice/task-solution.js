function findBall(scales) {
  let length = 4,
    currentBalls = [0, 1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < 3; i++) {
    let firstHalf = currentBalls.slice(0, length),
      secondHalf = currentBalls.slice(length),
      w = scales.getWeight(firstHalf, secondHalf);
    if (w === -1) currentBalls = firstHalf;
    else currentBalls = secondHalf;
    length /= 2;
  }
  return currentBalls[0];
}
