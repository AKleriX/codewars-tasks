function golfScoreCalculator(parList, scoreList) {
  let score = 0;
  for (let i = 0; i < 18; i++) score += +scoreList[i] - +parList[i];
  return score;
}
