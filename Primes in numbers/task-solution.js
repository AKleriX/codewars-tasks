function primeFactors(n){
  let primeCounter = [];
  for (let i = 2; n > 1; i++){
    if (isPrime(i)){  
      let counter = 0;
      while (!(n % i)){
        n = n / i;
        counter++;
      }
      if (counter) primeCounter.push(`(${i}${counter > 1 ? '**' + counter : ''})`);
    }
  }
  return primeCounter.join('');
}


const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if(!(n % i)) return false;
  return n > 1;
}