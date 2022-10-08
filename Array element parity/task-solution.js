const solve = (arr) => arr.find((n, i, ar) => ar.indexOf(-n) === -1);
