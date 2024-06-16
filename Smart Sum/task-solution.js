const smartSum = (...nums) => {
  const sumArray = (arr) => {
    return arr.reduce((s, v) => {
      if (Array.isArray(v)) {
        return s + sumArray(v);
      } else {
        return s + v;
      }
    }, 0);
  };

  return sumArray(nums);
};
