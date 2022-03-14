function yesNo(arr) {
  let resArr = [arr[0]];
  arr = arr.slice(1);
  while (arr.length > 1) {
    resArr.push(arr[1]);
    arr = arr.slice(2).concat([arr[0]]);
  }
  if (arr.length) resArr.push(arr[0]);
  return resArr;
}
