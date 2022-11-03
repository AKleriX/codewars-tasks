export const factorial = (n: number): number => (n ? n * factorial(n - 1) : 1);
