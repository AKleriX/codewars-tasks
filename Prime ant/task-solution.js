const primeAnt = (n) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return true;
  };

  let a = Array.from({ length: n * 2 }, (_, i) => i + 2),
    p = 0;

  for (let step = 0; step < n; step++) {
    if (isPrime(a[p])) p++;
    else {
      let q = 2;
      while (a[p] % q !== 0) q++;
      a[p] /= q;
      a[p - 1] += q;
      p--;
    }
  }

  return p;
};
