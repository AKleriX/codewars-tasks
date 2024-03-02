const increasingNumber = (x, n) => {
  for (let i = 1; i <= n; i++) while (x % i) x++;
  return x;
};
