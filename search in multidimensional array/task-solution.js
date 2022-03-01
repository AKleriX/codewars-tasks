const locate = function (arr, value) {
  let currentArr = [...arr];
  for (let i = 0; i < currentArr.length; i++) {
    if (Array.isArray(currentArr[i])) currentArr = currentArr.concat(currentArr[i]);
    else if (currentArr[i] === value) return true;
  }
  return false;
};
