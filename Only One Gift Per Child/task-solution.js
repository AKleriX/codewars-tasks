const names = new Set();

const handOutGift = (name) => {
  if (names.has(name)) throw new Error();
  names.add(name);
};
