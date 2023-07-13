function split(arr, prop) {
  let res = [[], []];
  for (let i = 0; i < arr.length; i++) res[arr[i][prop] ? 0 : 1].push(arr[i]);
  return res;
}
