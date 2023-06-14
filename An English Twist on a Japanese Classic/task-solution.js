function shiritori(words) {
  let res = [];
  if (words[0] && words[0].length) res.push(words[0]);
  for (let i = 1; i < words.length; i++)
    if (words[i - 1].slice(-1) === words[i][0]) res.push(words[i]);
    else break;
  return res;
}
