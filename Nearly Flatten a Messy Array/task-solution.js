function nearFlatten(nested) {
  let currentArr = [];
  const getArrWithNum = (arr) => {
    let numsArr = [];
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i])) numsArr.push(...getArrWithNum(arr[i]));
      else {
        numsArr.push(arr);
        break;
      }
    return numsArr;
  };
  for (let i = 0; i < nested.length; i++) currentArr.push(...getArrWithNum(nested[i]));
  return currentArr.sort((a, b) => a[0] - b[b.length - 1]);
}
