export function getGrade(a: number, b: number, c: number): string {
  const averScore: number = (a + b + c) / 3;
  if (averScore >= 90) return 'A';
  else if (averScore >= 80) return 'B';
  else if (averScore >= 70) return 'C';
  else if (averScore >= 60) return 'D';
  return 'F';
}