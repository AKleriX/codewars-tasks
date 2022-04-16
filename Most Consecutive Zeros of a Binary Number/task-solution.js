function maxConsecZeros(n) {
  const counts = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
  ];
  let zeros = (+n).toString(2).match(/0+/g),
    maxZero = zeros ? zeros.sort((a, b) => b.length - a.length)[0].length : 0;
  return counts[maxZero];
}
