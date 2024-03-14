function encode(s = '') {
  if (!s.length) return s;
  let res = s[0];
  for (let i = 0; i < ((s.length / 2) | 0) - !(s.length % 2); i++)
    res += s[s.length - 1 - i] + s[i + 1];
  if (res.length !== s.length) res += s[s.length / 2];
  return res;
}

function decode(s = '') {
  let resRight = '',
    resLeft = '';
  for (let i = 0; i < s.length; i++)
    if (i % 2) resRight = s[i] + resRight;
    else resLeft += s[i];
  return resLeft + resRight;
}
