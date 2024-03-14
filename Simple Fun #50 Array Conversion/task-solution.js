const arrayConversion = (arr) => {
  let resArr = [...arr],
    i = 0;
  while (resArr.length > 1) {
    let currentArr = [];
    for (let j = 0; j < resArr.length; j += 2)
      currentArr.push(!(i % 2) ? resArr[j] + resArr[j + 1] : resArr[j] * resArr[j + 1]);
    resArr = currentArr;
    i++;
  }
  return resArr[0];
};
