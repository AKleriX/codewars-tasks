const findDifference = (a, b) => Math.abs(a.reduce((v, n) => v * n) - b.reduce((v, n) => v * n));
