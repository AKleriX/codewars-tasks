function magicalWell(a, b, n) {
  let dollars = 0;
  while (n--) dollars += a++ * b++;
  return dollars;
}
