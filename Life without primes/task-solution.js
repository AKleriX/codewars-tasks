function solve(n) {
  let arr = [];
  for (let i = 1; arr.length <= n; i++)
    if (!isPrime(i) && [...i.toString()].every((d) => !isPrime(+d))) arr.push(i);
  return arr[n];
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
