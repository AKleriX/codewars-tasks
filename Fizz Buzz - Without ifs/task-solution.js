const fizzBuzz = (n) => {
  const res = (!(n % 3) ? 'Fizz' : '') + (!(n % 5) ? 'Buzz' : '');
  return res.length ? res : n;
};
