const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};

// first solution

function primeBefAft(num) {
  let pBA = [0, 0];
  for (let i = 1; i <= num; i++) {
    if (!pBA[0] && isPrime(num - i)) pBA[0] = num - i;
    if (!pBA[1] && isPrime(num + i)) pBA[1] = num + i;
    if (pBA[0] && pBA[1]) break;
  }
  return pBA;
}

// second solution

function primeBefAft(num) {
  let befN = num,
    aftN = num;
  while (!isPrime(--befN));
  while (!isPrime(++aftN));
  return [befN, aftN];
}
