const bubble = (arr) => {
  let res = [],
    currentArr = [...arr];
  for (let i = arr.length - 1; i >= 0; i--)
    for (let j = 0; j < i; j++)
      if (currentArr[j] > currentArr[j + 1]) {
        [currentArr[j], currentArr[j + 1]] = [currentArr[j + 1], currentArr[j]];
        res.push([...currentArr]);
      }
  return res;
};
