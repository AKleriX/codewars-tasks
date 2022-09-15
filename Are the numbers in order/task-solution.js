const inAscOrder = (arr) => arr.every((n, i, a) => !i || a[i] >= a[i - 1]);
