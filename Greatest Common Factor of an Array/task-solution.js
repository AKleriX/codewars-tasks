function greatestCommonFactor(array) {
  let gcf = array[0];
  for (let i = 1; i < array.length; i++) gcf = gcd(gcf, array[i]);
  return gcf;
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
