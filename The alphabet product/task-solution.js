const alphabet = (ns) => {
  const sortedArr = [...ns].sort((a, b) => a - b);
  return sortedArr[7] / sortedArr[sortedArr[0] * sortedArr[1] === sortedArr[2] ? 3 : 2];
};
