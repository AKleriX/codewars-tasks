function PrimeFactorizer(n) {
  this.factor = {};
  for (let i = 2; i <= n; i++)
    while (!(n % i)) {
      this.factor[i] = this.factor[i] ? this.factor[i] + 1 : 1;
      n /= i;
    }
}
