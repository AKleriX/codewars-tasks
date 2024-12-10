const mysteriousPattern = (m, n) => {
  let fib = [1, 1];
  for (let i = 2; i < m; i++) fib.push(fib[i - 1] + fib[i - 2]);
  let modFib = fib.slice(0, m).map((x) => x % n),
    rows = Array(n)
      .fill('')
      .map(() => Array(m).fill(' '));

  modFib.forEach((mod, idx) => {
    rows[mod][idx] = 'o';
  });

  let result = rows.map((row) => row.join('').trimEnd());

  while (result.length > 0 && result[result.length - 1] === '') result.pop();

  while (result.length > 0 && result[0] === '') result.shift();

  return result.join('\n');
};
