const menFromBoys = (arr) => {
  let men = [],
    boys = [],
    uniqArr = Array.from(new Set(arr));
  for (let i = 0; i < uniqArr.length; i++)
    if (uniqArr[i] % 2) boys.push(uniqArr[i]);
    else men.push(uniqArr[i]);
  return men.sort((a, b) => a - b).concat(boys.sort((a, b) => b - a));
};
