export function kiyoLcm(a): number {
  let emptyArrCounter: number = 0,
    arr: number[] = a.map((arr) => {
      if (!arr.length) emptyArrCounter++;
      return arr.reduce((sum, s) => (typeof s === 'number' && s % 2 ? sum + s : sum), 0);
    }),
    currentLcm: number = arr[0];
  for (let i = 1; i < arr.length; i++) currentLcm = lcm(currentLcm, arr[i]);
  return emptyArrCounter === a.length ? 0 : currentLcm;
}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);
