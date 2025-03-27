const flip = (stack) => {
  const res = [];
  sort(stack, stack.length, res);
  return res;
};

const sort = (arr, len, res) => {
  if (len < 2) return;

  const top = arr.slice(0, len),
    maxVal = Math.max(...top),
    maxPos = top.indexOf(maxVal);

  if (maxPos !== len - 1) {
    if (maxPos > 0) {
      res.push(maxPos);
      reverseTop(arr, maxPos + 1);
    }
    res.push(len - 1);
    reverseTop(arr, len);
  }

  sort(arr, len - 1, res);
};

const reverseTop = (arr, k) => {
  for (let i = 0, j = k - 1; i < j; i++, j--) [arr[i], arr[j]] = [arr[j], arr[i]];
};
