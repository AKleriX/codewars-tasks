const span = (arr, predicate) => {
  let correctArr = [],
      wrongArr = [];
  for (let i = 0; i < arr.length; i++)
    if (predicate(arr[i])) correctArr.push(arr[i]);
    else {
      wrongArr = arr.slice(i);
      break;
    }
  return [correctArr, wrongArr];
}