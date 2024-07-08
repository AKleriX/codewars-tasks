const longestBouncyList = (arr) => {
  let len = [arr[0]],
    max = len;

  for (let i = 0; i < arr.length; i++)
    if (
      len[len.length - 1] !== arr[i] &&
      (len.length === 1 ||
        len[len.length - 1] < len[len.length - 2] !== arr[i] < len[len.length - 1])
    )
      len.push(arr[i]);
    else {
      if (max.length < len.length) max = len;
      if (i !== 0 && arr[i] !== arr[i - 1]) i--;
      len = [arr[i]];
    }

  return max.length < len.length ? len : max;
};
