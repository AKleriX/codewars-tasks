export function disariumNumber(n: number): string {
  return (
    (n === [...n.toString()].reduce((s, d, i) => s + (+d) ** (i + 1), 0) ? 'Disarium' : 'Not') +
    ' !!'
  );
}
