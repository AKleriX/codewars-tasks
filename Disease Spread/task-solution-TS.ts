export function epidemic(tm: number, n: number, s0: number, i0: number, b: number, a: number): number {
  let r: number[] = [0],
      dt: number = tm / n,
      s: number[] = [s0],
      i: number[] = [i0];
  for (let j = 0; j < n; j++){
    s.push(s[j] - dt * b * s[j] * i[j]);
    i.push(i[j] + dt * (b * s[j] * i[j] - a * i[j]));
    r.push(r[j] + dt * i[j] * a);
  }
  return Math.trunc(Math.max.apply(null, i));
}