const numbersGrouping = (a) => a.length + new Set(a.map((n) => Math.ceil(n / 10 ** 4))).size;
