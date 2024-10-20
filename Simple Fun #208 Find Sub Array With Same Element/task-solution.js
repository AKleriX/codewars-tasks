const findSubArrayWithSameElement = (a, k) => {
  let start = -1,
    end = -1,
    maxLength = 0,
    currentStart = -1;

  for (let i = 0; i < a.length; i++)
    if (a[i] === k) {
      if (currentStart === -1) currentStart = i;
      if (i - currentStart + 1 >= maxLength) {
        start = currentStart;
        end = i;
        maxLength = i - currentStart + 1;
      }
    } else currentStart = -1;

  return maxLength > 0 ? [start, end] : [-1, -1];
};
