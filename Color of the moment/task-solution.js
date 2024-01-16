const hexToTime = (hexCode) => {
  let [h, m, s] = hexCode
    .slice(1)
    .match(/../g)
    .map((h) => parseInt(h, 16));
  if (h > 23 || m > 59 || s > 59) throw new Error('Thats not a valid time!');
  return `${addZeros(h)}:${addZeros(m)}:${addZeros(s)}`;
};

const addZeros = (n) => (n < 10 ? '0' + n : n.toString());
