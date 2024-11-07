const split = (arr) => {
  const arr1 = arr.flat(),
    arr2 = arr.map((subArr) => [subArr.length]);
  return [arr1, arr2];
};

const join = (arr1, arr2) => {
  let result = [],
    index = 0;
  arr2.forEach((subArr) => {
    result.push(arr1.slice(index, index + subArr[0]));
    index += subArr[0];
  });
  return result;
};
