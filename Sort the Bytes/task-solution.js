const sortBytes = (uint32) => {
  let bits = ('0'.repeat(32) + uint32.toString(2)).slice(-32);
  return parseInt(bits.match(/\d{8}/g).sort().reverse().join(''), 2);
};
