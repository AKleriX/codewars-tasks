const countNumber = (n, x) => {
  let counter = 0;
  for (let i = 1; i <= Math.min(n, x); i++) if (!(x % i) && x / i <= n) counter++;
  return counter;
};
