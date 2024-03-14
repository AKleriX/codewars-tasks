const findMaxProduct = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let p = 1;
    for (let j = i; j < arr.length; j += i + 1) p *= arr[j];
    max = Math.max(max, p);
  }
  return max;
};
