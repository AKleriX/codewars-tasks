const shortestTime = (speed) => {
  let sortArr = [...speed].sort((a, b) => a - b);
  return sortArr[1] + sortArr[0] + sortArr[3] + Math.min(sortArr[0] + sortArr[2], 2 * sortArr[1]);
};
