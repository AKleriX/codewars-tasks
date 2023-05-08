const olympicRing = (a) => {
  let counter = 0;
  for (let i = 0; i < a.length; i++)
    if (/[abdegopqADOPQR]/.test(a[i])) counter += 1;
    else if (/B/.test(a[i])) counter += 2;
  counter = Math.floor(counter / 2);
  return counter < 2
    ? 'Not even a medal!'
    : counter === 2
    ? 'Bronze!'
    : counter === 3
    ? 'Silver!'
    : 'Gold!';
};
