const maxedOut = (arr) => {
  const sum = arr.reduce((s, n) => s + n ** 3, 0);
  return sum <= Number.MAX_SAFE_INTEGER ? sum : `You've pushed me to the max!`;
};
