const finalAttackValue = (x, monsterList) =>
  monsterList.reduce((a, d) => a + (a < d ? gcd(a, d) : d), x);

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
