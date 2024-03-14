const toBytes = (n) => {
  let bits = n.toString(2);
  return ('0'.repeat(8 - (bits.length % 8 || 8)) + bits).match(/\d{8}/g);
};
