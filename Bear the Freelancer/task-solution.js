const bearDollars = (arr) => {
  const dict = {
    'close friend': 25,
    friend: 50,
    acquaintance: 100,
  };
  return arr.reduce(
    (s, p) => s + p[0] * (dict.hasOwnProperty(p[1].toLowerCase()) ? dict[p[1].toLowerCase()] : 125),
    0,
  );
};
