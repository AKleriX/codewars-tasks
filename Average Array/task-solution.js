const avgArray = (arr) => arr[0].map((_, i) => arr.reduce((s, a) => s + a[i], 0) / arr.length);
