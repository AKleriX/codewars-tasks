const find = (arr, n) => {
  const f = (target, maxLength, start, memo = {}) => {
    if (target === 0) return 1;
    if (target < 0 || maxLength <= 0) return 0;

    const key = `${target},${maxLength},${start}`;
    if (key in memo) return memo[key];
    let count = 0;
    for (let i = start; i < arr.length; i++) {
      count += f(target - arr[i], maxLength - 1, i, memo);
    }

    memo[key] = count;
    return count;
  };

  return f(n, arr.length, 0);
};
