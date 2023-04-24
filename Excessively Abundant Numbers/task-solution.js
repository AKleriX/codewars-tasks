const abundantNumber = (num) => {
  let divSum = 0;
  for (let i = 1; i < num; i++) if (!(num % i)) divSum += i;
  return divSum > num;
};
