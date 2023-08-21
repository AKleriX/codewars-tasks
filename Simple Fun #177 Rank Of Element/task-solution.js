const rankOfElement = (arr, i) => arr.reduce((s, v, j, a) => (j < i ? v <= a[i] : v < a[i]) + s, 0);
