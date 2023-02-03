const multiplyAndFilter = (array, multiplier) =>
  array.filter((el) => (typeof el === 'number') & !isNaN(el)).map((n) => n * multiplier);
