const every = (arr, interval, start = 0) => {
  let res = [];
  for (let i = start; i < arr.length; i++)
    if (!res.length || i - interval === res[res.length - 1][1] || !interval) res.push([arr[i], i]);
  return res.map((el) => el[0]);
};
