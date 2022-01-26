const findSum = (n) => {
  let sum = 0;
  for (let i = 3; i <= n; i++)
    if (!(i % 3) || !(i % 5)) sum += i;
  return sum;
}