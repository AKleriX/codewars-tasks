function solve(a,b){
    let primeStr = '';
    for (let i = 2; primeStr.length <= a + b; i++)
      primeStr += isPrime(i) ? i.toString() : '';
    return primeStr.slice(a, a + b);
  }
  
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++)
      if (!(num % i)) return false;
    return num > 1;
  }