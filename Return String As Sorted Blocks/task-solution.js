function blocks(s) {
  let counter = {},
    resArr = [];
  for (let i = 0; i < s.length; i++) {
    let symbolNum = counter[s[i]] ? counter[s[i]] : 0;
    if (!resArr[symbolNum]) resArr[symbolNum] = [];
    resArr[symbolNum].push(s[i]);
    counter[s[i]] = symbolNum + 1;
  }
  return resArr.map((a) => a.sort(getSort).join('')).join('-');
}

const getSort = (a, b) => {
  if (/[a-z]/.test(a) && !/[a-z]/.test(b)) return -1;
  if (!/[a-z]/.test(a) && /[a-z]/.test(b)) return 1;
  if (/[A-Z]/.test(a) && /\d/.test(b)) return -1;
  if (/\d/.test(a) && /[A-Z]/.test(b)) return 1;
  return a.localeCompare(b);
};
