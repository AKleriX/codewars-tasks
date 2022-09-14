function solve(a, b) {
  const decPrimes = [
    '11',
    '13',
    '17',
    '19',
    '23',
    '29',
    '31',
    '37',
    '41',
    '43',
    '47',
    '53',
    '59',
    '61',
    '67',
    '71',
    '73',
    '79',
    '83',
    '89',
    '97',
  ];
  let count = 0;
  for (let i = a < 1176 ? 1176 : a; i < b; i++) {
    let sq = (i * i).toString();
    if (
      decPrimes.includes(i.toString().slice(0, 2)) &&
      decPrimes.includes(sq.slice(0, 2)) &&
      i.toString().slice(-2) === sq.slice(-2)
    )
      count++;
  }
  return count;
}
