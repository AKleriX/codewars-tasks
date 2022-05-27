const EvenOdd = (arr) => arr.reduce((s, n, i) => (i % 2 ? s * n : s + n));
