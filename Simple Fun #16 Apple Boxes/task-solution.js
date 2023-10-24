const appleBoxes = (k) => {
  let y = 0,
    r = 0;
  for (let i = 1; i <= k; i++)
    if (!(i % 2)) r += i ** 2;
    else y += i ** 2;
  return r - y;
};
