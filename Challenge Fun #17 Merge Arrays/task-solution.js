function mergeArrays(a, b) {
  let arr = [],
    i = 0,
    j = 0;
  while (i < a.length || j < b.length) {
    if (i === a.length) arr.push(b[j++]);
    else if (j === b.length) arr.push(a[i++]);
    else if (a[i] < b[j]) arr.push(a[i++]);
    else if (b[j] < a[i]) arr.push(b[j++]);
    else {
      let num = a[i];
      while (a[i] === num && b[j] === num) {
        i++;
        j++;
      }
      if (a[i] === num) while (a[i] === num) i++;
      else if (b[j] === num) while (b[j] === num) j++;
      else arr.push(num);
    }
  }
  return Array.from(new Set(arr));
}
