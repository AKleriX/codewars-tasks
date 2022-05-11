function solve(a, b) {
  let counter = 0;
  for (let i = a; i < b; i++)
    if (isPrime(i)) {
      let nums = new Set(),
        num = i;
      do {
        nums.add(num);
        num = [...num.toString()].reduce((sq, d) => sq + (+d) ** 2, 0);
      } while (num !== 1 && !nums.has(num));
      if (num === 1) counter++;
    }
  return counter;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
