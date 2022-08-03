function solve(a, b, c, alpha, beta, gamma) {
  let x = a * Math.cos(getRad(alpha)) - b * Math.sin(getRad(beta)) - c * Math.cos(getRad(gamma)),
    y = a * Math.sin(getRad(alpha)) + b * Math.cos(getRad(beta)) - c * Math.sin(getRad(gamma)),
    len = Math.round(Math.sqrt(x ** 2 + y ** 2)),
    ang = Math.PI / 2 + Math.atan(-x / y),
    allSec = (ang * 360 * 60 ** 2) / (2 * Math.PI),
    sec = allSec % 60 | 0,
    min = (allSec / 60) % 60 | 0,
    deg = (allSec / 60 ** 2) | 0;
  return [len, deg, min, sec];
}

const getRad = (n) => ((n + (n < 0 ? 360 : 0)) / 180) * Math.PI;
