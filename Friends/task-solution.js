const friends = (n) => {
  let p = 0;
  while (2 ** p < n) p++;
  return n < 2 ? 0 : p - 1;
};
