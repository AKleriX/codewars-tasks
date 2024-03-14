const countSumOfTwoRepresentations = (n, l, r) => {
  let counter = 0;
  for (let i = l; i <= r; i++) if (n - i <= r && n - i >= i) counter++;
  return counter;
};
