function lettersToNumbers(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++)
    if (/[a-z]/.test(s[i])) counter += s[i].charCodeAt() - 96;
    else if (/[A-Z]/.test(s[i])) counter += (s[i].charCodeAt() - 64) * 2;
    else if (/\d/.test(s[i])) counter += +s[i];
  return counter;
}
