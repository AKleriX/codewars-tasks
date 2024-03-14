const isMultiple = (a, b, n) => {
  const rem = +((a / b) % 1).toFixed(1) * 10;
  return rem > 0 && rem < 10 && rem % n === 0;
};
