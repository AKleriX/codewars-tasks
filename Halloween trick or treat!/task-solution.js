const trickOrTreat = (children, candies) => {
  if (candies.length !== children) return 'Trick or treat!';
  let counts = [];
  for (let pack of candies) {
    if (pack.includes('bomb')) return 'Trick or treat!';
    let count = pack.filter((item) => item === 'candy').length;
    if (count < 2) return 'Trick or treat!';
    counts.push(count);
  }
  return counts.every((c) => c === counts[0]) ? 'Thank you, strange uncle!' : 'Trick or treat!';
};
