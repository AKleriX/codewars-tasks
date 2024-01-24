const countCombinations = (string, key) => {
  let re = new RegExp(key, 'ig');
  return (string.match(re) || []).length;
};
