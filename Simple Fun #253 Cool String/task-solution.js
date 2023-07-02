function coolString(s) {
  let isUpperCase = s[0].toUpperCase() === s[0];
  for (let i = 1; i < s.length; i++)
    if (isUpperCase === (s[i].toUpperCase() === s[i])) return false;
    else isUpperCase = !isUpperCase;
  return /^[a-z]+$/gi.test(s);
}
