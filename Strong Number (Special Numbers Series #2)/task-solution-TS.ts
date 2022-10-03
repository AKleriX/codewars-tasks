export const strongNumber = (n: number): string => {
  return n === [...n.toString()].reduce((s, d) => s + fact(+d), 0) ? 'STRONG!!!!' : 'Not Strong !!';
};

const fact = (n: number): number => (n < 2 ? 1 : n * fact(n - 1));
