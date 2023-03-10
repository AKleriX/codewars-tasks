function getScore(arr) {
  const dict = [0, 40, 100, 300, 1200];
  let score = 0,
    lvl = 0,
    lvlScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (lvlScore >= 10) {
      lvlScore = lvlScore - 10;
      lvl++;
    }
    score += dict[arr[i]] * (lvl + 1);
    lvlScore += arr[i];
  }
  return score;
}
