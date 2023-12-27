const learnCharitableGame = (arr) => {
  const sum = arr.reduce((s, n) => s + n, 0);
  return arr.length === 1 || (sum / arr.length > 0 && !(sum % arr.length));
};
