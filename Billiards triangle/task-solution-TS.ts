export function pyramid(balls: number): number {
  let lvl: number = 0;
  while (balls > lvl) balls -= ++lvl;
  return lvl;
}
