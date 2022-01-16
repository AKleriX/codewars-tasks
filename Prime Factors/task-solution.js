function prime_factors(n) {
    let primeArr = [],
        num = n;
    while (num > 1)
      for (let i = 2; i <= num; i++)
        if (!(num % i) && isPrime(i)){
          primeArr.push(i);
          num /= i;
          break;
        }
    return primeArr; 
    
  }
  
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (!(n % i)) return false;
    return true;
  };