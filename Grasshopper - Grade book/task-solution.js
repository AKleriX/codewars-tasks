const scoresGrade = ['F', 'D', 'C', 'B', 'A'];
const getGrade = (s1, s2, s3) => {
  const scoreDoz = Math.trunc((s1 + s2 + s3) / 30);
  return scoresGrade[scoreDoz === 10 ? scoreDoz - 6 : (scoreDoz < 6 ? 0 : scoreDoz - 5)];
}