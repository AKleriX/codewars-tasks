const isCoprime = (x, y) => (y ? isCoprime(y, x % y) : x === 1);
