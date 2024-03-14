const apples = (kilos, price) => {
  const disc =
    kilos >= 11
      ? 0.7
      : kilos >= 9
      ? 0.75
      : kilos >= 7
      ? 0.8
      : kilos >= 5
      ? 0.85
      : kilos >= 3
      ? 0.9
      : kilos >= 1
      ? 0.95
      : 1;
  return kilos * price * disc;
};
