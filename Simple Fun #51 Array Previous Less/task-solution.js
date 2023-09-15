const arrayPreviousLess = (arr) => arr.map((n, i, a) => a.findLast((v, j) => v < n && j < i) || -1);
