const lastNonEmptyString = str => {
  let count = new Array(26).fill(0),
      l = new Array(26).fill(0),
      n = str.length,
      max = 0;
  for (let i = 0; i < n; ++i) {
    let c = str.charCodeAt(i) - 'a'.charCodeAt(0);
    max = Math.max(max, ++count[c]);
    l[c] = i;
  }
  let ans = '';
  for (let i = 0; i < n; ++i) {
    let c = str.charCodeAt(i) - 'a'.charCodeAt(0);
    if (count[c] === max && l[c] === i)
      ans += str[i];
  }
  return ans;
};