const getSocks = (name, socks) => {
  const res =
    name === 'Henry'
      ? socks.filter((c, i, arr) => arr.indexOf(c) !== i || arr.lastIndexOf(c) !== i).slice(0, 2)
      : Array.from(new Set(socks)).slice(0, 2);
  return res.length < 2 ? [] : res;
};
