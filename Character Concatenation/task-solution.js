function charConcat(string) {
  let res = '';
  for (let i = 0; i < Math.floor(string.length / 2); i++)
    res += string[i] + string[string.length - 1 - i] + (i + 1).toString();
  return res;
}
