const splitByValue = (k, elements) =>
  [...elements].sort((a, b) => ((a >= k && b >= k) || (a < k && b < k) ? 0 : a - b));
