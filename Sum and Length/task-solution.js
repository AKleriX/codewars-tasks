const sumLength = (arr) => {
  let zeros = 0,
    res = [0, 0];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > 0) res[0] += arr[i];
    else if (arr[i] < 0) res[1]++;
    else res[++zeros % 2] += zeros % 2 ? 1 : 0;
  return res.join(' ');
};
