const twins = (myArray) =>
  Object.values(myArray.reduce((d, n) => ((d[n] = (d[n] || 0) + 1), d), {})).every((c) => c === 2);
