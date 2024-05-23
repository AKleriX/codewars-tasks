const allNines = (x) => {
  let startNum = 9n;
  if (!(x % 2n) || !(x % 5n)) return -1n;
  while (startNum % x) startNum = startNum * 10n + 9n;
  return startNum / x;
};
