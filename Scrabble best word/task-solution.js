function getBestWord(points, words) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let bestIndex = 0,
    bestScore = 0,
    minLength = Math.max.apply(
      null,
      words.map((w) => w.length),
    );
  for (let i = 0; i < words.length; i++) {
    let score = 0;
    for (let j = 0; j < words[i].length; j++) score += points[abc.indexOf(words[i][j])];
    if (bestScore < score || (bestScore === score && minLength > words[i].length))
      [bestIndex, bestScore, minLength] = [i, score, words[i].length];
  }
  return bestIndex;
}
