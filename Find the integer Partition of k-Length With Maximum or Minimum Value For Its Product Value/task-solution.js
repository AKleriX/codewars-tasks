const findSpecPartition = (n, k, com) => {
  if (com === 'max')
    return n % k === 0
      ? Array(k).fill(Math.floor(n / k))
      : Array(n % k)
          .fill(Math.floor(n / k) + 1)
          .concat(Array(k - (n % k)).fill(Math.floor(n / k)));
  else return [n - k + 1].concat(Array(k - 1).fill(1));
};
