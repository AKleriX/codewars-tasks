const doINeedHouseboat = (x, y) => {
  let c = 0,
    r = 0;
  while (Math.sqrt(x ** 2 + y ** 2) > Math.sqrt((100 * ++c) / Math.PI));
  return c;
};
