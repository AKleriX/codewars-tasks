function capitalsFirst(str) {
  let words = str.split(' '),
    sortArr = [];
  for (let i = 0; i < words.length; i++) if (/[A-Z]/.test(words[i][0])) sortArr.push(words[i]);
  return sortArr.concat(words.filter((w) => /[a-z]/.test(w[0]))).join(' ');
}
