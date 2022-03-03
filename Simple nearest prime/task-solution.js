function solve(n){  
  let iterator = 0;
  while (!isPrime(n - iterator) && !isPrime(n + iterator))
    iterator++;
  return isPrime(n - iterator) ? n - iterator : n + iterator;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (!(n % i)) return false;
  return n > 1;
}