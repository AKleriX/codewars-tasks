const houseNumbersSum = (arr) => arr.slice(0, arr.indexOf(0)).reduce((s, n) => s + n, 0);
