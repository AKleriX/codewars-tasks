const distributionOf = (golds) => {
  let arr = [...golds],
    score = [0, 0],
    c = 0;
  while (arr.length) score[c++ % 2] += arr[arr.length - 1] > arr[0] ? arr.pop() : arr.shift();
  return score;
};
