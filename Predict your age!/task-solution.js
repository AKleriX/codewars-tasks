function predictAge() {
  let ages = [...arguments];
  return (Math.sqrt(ages.reduce((s, a) => s + a * a, 0)) / 2) | 0;
}
