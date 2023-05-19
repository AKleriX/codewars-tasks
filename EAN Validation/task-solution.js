const validateEAN = (eanCode) => {
  let sum = [...eanCode.slice(0, -1)].reduce((s, n, i) => s + n * (i % 2 ? 3 : 1), 0);
  if (sum % 10) sum = 10 - (sum % 10);
  else sum = 0;
  return sum === +eanCode.slice(-1);
};
