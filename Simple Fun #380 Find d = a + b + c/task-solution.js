const findD = (arr) => {
  let res = null;
  for (let i = 0; i < arr.length - 2; i++)
    for (let j = i + 1; j < arr.length - 1; j++)
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum !== arr[i] && sum !== arr[j] && sum !== arr[k] && arr.includes(sum))
          res = res === null || res < sum ? sum : res;
      }
  return res;
};
