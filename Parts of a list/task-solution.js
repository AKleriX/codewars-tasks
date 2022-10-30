function partlist(arr) {
  let resArr = [];
  for (let i = 1; i < arr.length; i++)
    resArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  return resArr;
}
