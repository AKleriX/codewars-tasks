function f(n, m) {
    let sum = (n % m) * (n % m + 1) / 2,
        fullSum = m * (m - 1) / 2; 
    return sum + Math.trunc(n / m) * fullSum;
  }