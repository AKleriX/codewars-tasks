const maxPossibleScore = (obj, arr) => {
  const strArr = arr.map(String);
  return Object.keys(obj).reduce((s, k) => s + obj[k] * (strArr.includes(k) ? 2 : 1), 0);
};
