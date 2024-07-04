const luxhouse = (houses) => {
  const res = new Array(houses.length).fill(0);

  let maxRight = 0;

  for (let i = houses.length - 1; i >= 0; i--)
    if (houses[i] > maxRight) maxRight = houses[i];
    else res[i] = maxRight - houses[i] + 1;

  return res;
};
