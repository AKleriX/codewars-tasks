const mobius = (n) => {
  if (!(n % 4)) return 0;

  let mu = 1;

  for (let i = 2; i * i <= n; i++)
    if (n % i === 0) {
      if (n % (i * i) === 0) return 0;
      n /= i;
      mu = -mu;
    }

  return n > 1 ? -mu : mu;
};
