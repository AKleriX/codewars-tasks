const diagonal = (n, p) => Math.round(factorial(n + 1) / (factorial(p + 1) * factorial(n - p)));

const factorial = (n) => n ? n * factorial(n - 1) : 1;