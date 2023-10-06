const scf = (array) => {
  const smallestNum = Math.min(...array);
  let scf = 1,
    i = 2;
  while (i <= smallestNum && smallestNum < Infinity) {
    if (array.every((n) => !(n % i))) {
      scf = i;
      break;
    }
    i++;
  }
  return scf;
};
