const factorial = (n) => (n === 0 ? 1 : n > 0 ? n * factorial(n - 1) : n * factorial(n + 1));
