const swapAdjacentBits = (n) => {
  let bits = [...n.toString(2)];
  if (bits.length % 2) bits.unshift('0');
  for (let i = 0; i < bits.length; i += 2) [bits[i], bits[i + 1]] = [bits[i + 1], bits[i]];
  return parseInt(bits.join(''), 2);
};
