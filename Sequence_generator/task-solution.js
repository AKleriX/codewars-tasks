const sequence = (n, pattern) =>
  Array.from({ length: n }, typeof pattern === 'function' ? pattern : () => pattern);
