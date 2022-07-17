function pyramidHeight(n) {
  let levels = 0;
  for (let i = 1; n >= i ** 2; n -= (i++) ** 2) levels++;
  return levels;
}
