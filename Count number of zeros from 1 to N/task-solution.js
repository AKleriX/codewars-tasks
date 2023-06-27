const countZeros = (n) => {
  let counter = 0;
  for (let i = 10; i <= n; i++) counter += i.toString().replace(/[^0]/g, '').length;
  return counter;
};
