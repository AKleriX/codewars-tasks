const noonerize = (numbers) => {
  if (numbers.length !== 2 || !numbers.every((n) => Number.isInteger(n))) return 'invalid array';
  return Math.abs(
    +(numbers[1].toString()[0] + numbers[0].toString().slice(1)) -
      +(numbers[0].toString()[0] + numbers[1].toString().slice(1)),
  );
};
