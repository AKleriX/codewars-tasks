const factorial = (n: number): number => n ? n * factorial(n - 1) : 1;

export const diagonal = (n: number, p: number): number => Math.round(factorial(n + 1) / (factorial(n - p) * factorial(p + 1)));
