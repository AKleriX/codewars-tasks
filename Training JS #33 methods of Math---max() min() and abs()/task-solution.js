const maxMin = (arr1, arr2) => {
  let dif = arr1.map((n, i) => Math.abs(n - arr2[i]));
  return [Math.max(...dif), Math.min(...dif)];
};
