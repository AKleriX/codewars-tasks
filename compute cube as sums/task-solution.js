const findSummands = (n) => Array.from({ length: n }, (_, i) => n * (n - 1) + 1 + 2 * i);
