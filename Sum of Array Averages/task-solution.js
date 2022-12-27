const sumAverage = (arr) =>
  Math.floor(arr.map((a) => a.reduce((s, n) => s + n, 0) / a.length).reduce((s, n) => s + n, 0));
