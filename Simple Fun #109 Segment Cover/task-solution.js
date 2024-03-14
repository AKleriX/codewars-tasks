const segmentCover = (A, L) => {
  let counter = 0,
    sortArr = [...A].sort((a, b) => a - b),
    currentEl = sortArr[0];
  for (let i = 1; i < sortArr.length; i++) {
    while (sortArr[i] - currentEl <= L) i++;
    if (i < sortArr.length) counter++;
    currentEl = sortArr[i];
  }
  return ++counter;
};
