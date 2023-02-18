function decode(string) {
  const dict = [5, 9, 8, 7, 6, 0, 4, 3, 2, 1];
  return string.replace(/./g, (d) => dict[+d]);
}
