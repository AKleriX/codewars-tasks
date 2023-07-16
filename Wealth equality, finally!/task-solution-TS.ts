export function redistributeWealth(wealth: number[]): void {
  const avr: number = wealth.reduce((s, w) => s + w, 0) / wealth.length,
    len: number = wealth.length;
  for (let i = 0; i < len; i++) wealth[i] = avr;
}
