export const height = (n: number): string =>
  Array.from({ length: n + 1 }, (_) => 0)
    .reduce((h, _, i) => (!i ? h : [...h, h[i - 1] / 2.5]), [2000000])
    .reduce((s, h) => s + h)
    .toFixed(3);
