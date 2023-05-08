const fibsFizzBuzz = function (n) {
  let res = [],
    currentFibSeq = [0, 1, 1];

  const getFib = (num) => {
    if (!currentFibSeq[num]) currentFibSeq[num] = getFib(num - 1) + getFib(num - 2);
    return currentFibSeq[num];
  };

  for (let i = 1; i <= n; i++) {
    let currentFib = getFib(i),
      forRes = '';
    if (!(currentFib % 3)) forRes += 'Fizz';
    if (!(currentFib % 5)) forRes += 'Buzz';
    res.push(forRes.length ? forRes : currentFib);
  }

  return res;
};
