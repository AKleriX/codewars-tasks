export function solve(
  a: number,
  b: number,
  c: number,
  alpha: number,
  beta: number,
  gamma: number,
): number[] {
  let x: number =
      a * Math.cos(getRad(alpha)) - b * Math.sin(getRad(beta)) - c * Math.cos(getRad(gamma)),
    y: number =
      a * Math.sin(getRad(alpha)) + b * Math.cos(getRad(beta)) - c * Math.sin(getRad(gamma)),
    len: number = Math.round(Math.sqrt(x ** 2 + y ** 2)),
    ang: number = Math.PI / 2 + Math.atan(-x / y),
    allSec: number = (ang * 360 * 60 ** 2) / (2 * Math.PI),
    sec: number = allSec % 60 | 0,
    min: number = (allSec / 60) % 60 | 0,
    deg: number = (allSec / 60 ** 2) | 0;
  return [len, deg, min, sec];
}

const getRad = (n: number): number => ((n + (n < 0 ? 360 : 0)) / 180) * Math.PI;
