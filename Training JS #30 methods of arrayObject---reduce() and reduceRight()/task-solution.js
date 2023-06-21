const tailAndHead = (arr) =>
  arr.slice(1).reduce((p, n, i) => p * ((arr[i] % 10) + +n.toString()[0]), 1);
