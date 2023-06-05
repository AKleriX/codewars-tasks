function nextLetter(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let resStr = '';
  for (let i = 0; i < str.length; i++)
    if (/[a-z]/i.test(str[i])) {
      let newLetter = abc[(abc.indexOf(str[i].toLowerCase()) + 1) % 26];
      resStr += str[i] === str[i].toUpperCase() ? newLetter.toUpperCase() : newLetter;
    } else resStr += str[i];
  return resStr;
}
