const solve = (arr) => arr.filter((n, i, arr) => arr.slice(i + 1).every((nextN) => nextN < n));
