function countKprimes(k, start, nd) {
  let kPrimes = [];
  for (let i = start; i <= nd; i++) if (getNumPrimes(i) === k) kPrimes.push(i);
  return kPrimes;
}
function puzzle(s) {
  let p1 = countKprimes(1, 0, s),
    p3 = countKprimes(3, 0, s),
    p7 = countKprimes(7, 0, s),
    counter = 0;
  for (let i = 0; i < p1.length; i++)
    for (let j = 0; j < p3.length; j++)
      for (let k = 0; k < p7.length; k++) if (p1[i] + p3[j] + p7[k] === s) counter++;
  return counter;
}

const getNumPrimes = (n) => {
  let counter = 0,
    i = 2;
  while (i * i <= n) {
    while (!(n % i)) {
      counter++;
      n /= i;
    }
    i++;
  }
  return n > 1 ? ++counter : counter;
};
