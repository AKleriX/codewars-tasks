function mergeArrays(a, b) {
  let resArr = [];
  for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
    if (i < a.length) resArr.push(a[i]);
    if (i < b.length) resArr.push(b[i]);
  }
  return resArr;
}
