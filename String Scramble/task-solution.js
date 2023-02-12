const scramble = (str, arr) =>
  arr
    .map((n, i) => [n, str[i]])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
    .join('');
