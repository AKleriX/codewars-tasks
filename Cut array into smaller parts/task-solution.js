function makeParts(arr, chunkSize) {
  let res = [];
  for (let i = 0; i < arr.length; i += chunkSize) res.push(arr.slice(i, i + chunkSize));
  return res;
}
