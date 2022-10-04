const sumEvenNumbers = (arr) => arr.reduce((s, n) => s + (!(n % 2) ? n : 0), 0);
