const FilterNumbers = function (str) {
  return str
    .split('')
    .filter((c) => isNaN(+c))
    .join('');
};
