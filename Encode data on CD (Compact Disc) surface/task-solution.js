const encodeCD = (n) => {
  const bits = [...n.toString(2).padStart(8, '0')].reverse();
  let res = 'P',
    currentFeature = 'P';
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === '1') currentFeature = currentFeature === 'P' ? 'L' : 'P';
    res += currentFeature;
  }
  return res;
};
