export const countKprimes = (k: number, start: number, nd: number): number[] => {
  let kPrimes: number[] = [];
  for (let i = start; i <= nd; i++) if (getNumPrimes(i) === k) kPrimes.push(i);
  return kPrimes;
};
export const puzzle = (s: number): number => {
  let p1: number[] = countKprimes(1, 0, s),
    p3: number[] = countKprimes(3, 0, s),
    p7: number[] = countKprimes(7, 0, s),
    counter: number = 0;
  for (let i = 0; i < p1.length; i++)
    for (let j = 0; j < p3.length; j++)
      for (let k = 0; k < p7.length; k++) if (p1[i] + p3[j] + p7[k] === s) counter++;
  return counter;
};

const getNumPrimes = (n: number): number => {
  let counter: number = 0,
    i: number = 2;
  while (i * i <= n) {
    while (!(n % i)) {
      counter++;
      n /= i;
    }
    i++;
  }
  return n > 1 ? ++counter : counter;
};
