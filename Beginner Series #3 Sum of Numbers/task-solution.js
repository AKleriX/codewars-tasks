const getSum = (a, b) => a === b ? a : (a > b ? ((a + b) / 2) * (a - b + 1) : ((a + b) / 2) * (b - a + 1));