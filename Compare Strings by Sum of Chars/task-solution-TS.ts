export function compare(s1: string | null, s2: string | null): boolean {
  let sumFirst: number = s1 && s1.length ? [...s1].reduce(getSumOfStr, 1) : 0,
    sumSecond: number = s2 && s2.length ? [...s2].reduce(getSumOfStr, 1) : 0;
  return sumFirst === sumSecond;
}

const getSumOfStr = (sum: number, symbol: string): number =>
  /[a-z]/i.test(symbol) && sum ? sum + symbol.toUpperCase().charCodeAt(0) : 0;
