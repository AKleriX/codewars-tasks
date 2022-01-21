function getDivisorsCnt(n){
  let counter = 0;
  for (let i = 0; i <= n / 2; i++)
    if (!(n % i)) counter++
  return counter;
}