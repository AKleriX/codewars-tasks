export function dist(v: number, mu: number,  g: number = 9.81): number {
  v /=  3.6;
  return (v**2 / (2 * mu * g)) + v;
}
export function speed(d: number, mu: number, g: number = 9.81): number {
  return 3.6 * (-mu * g + Math.sqrt(mu * g * (mu * g + 2 * d)));
}