function kiyoLcm(a) {
  let emptyArrCounter = 0,
    arr = a.map((arr) => {
      if (!arr.length) emptyArrCounter++;
      return arr.reduce((sum, s) => (typeof s === 'number' && s % 2 ? sum + s : sum), 0);
    }),
    currentLcm = arr[0];
  for (let i = 1; i < arr.length; i++) currentLcm = lcm(currentLcm, arr[i]);
  return emptyArrCounter === a.length ? 0 : currentLcm;
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
