function explode(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) str += s[i].repeat(+s[i]);
  return str;
}
