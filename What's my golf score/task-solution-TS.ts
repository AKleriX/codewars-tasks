export function golfScoreCalculator(parList: string, scoreList: string): number {
  let score: number = 0;
  for (let i = 0; i < 18; i++) score += +scoreList[i] - +parList[i];
  return score;
}
