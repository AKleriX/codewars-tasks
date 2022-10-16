function boredom(staff) {
  const points = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  let currentScore = Object.values(staff).reduce((s, d) => s + points[d], 0);
  return currentScore <= 80
    ? 'kill me now'
    : currentScore < 100
    ? 'i can handle this'
    : 'party time!!';
}
