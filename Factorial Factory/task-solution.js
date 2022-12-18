const factorial = (n) => (n < 0 ? null : n > 0 ? n * factorial(n - 1) : 1);
