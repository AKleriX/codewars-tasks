const findDup = (arr) => arr.reduce((s, n) => s + n) - (arr.length - 1) * (arr.length / 2);
