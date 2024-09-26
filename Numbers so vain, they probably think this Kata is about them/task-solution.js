const isNarcissistic = (...args) => {
  if (!args.every((arg) => (typeof arg === 'number' || !isNaN(Number(arg))) && arg !== ''))
    return false;
  const isNarcissisticNumber = (num) => {
    const digits = String(num).split(''),
      numberOfDigits = digits.length,
      sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numberOfDigits), 0);
    return sum === Number(num);
  };

  return args.every((arg) => isNarcissisticNumber(Number(arg)));
};
