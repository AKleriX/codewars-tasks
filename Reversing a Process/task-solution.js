const decode = (r) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz',
        num = Number(r.replace(/[a-z]/gi,'')),
        letters = r.replace(/\d/g, '');
  let s = '';
  for (let i = 0; i < letters.length; i++)
    for (let j = 0; j < 26; j++)
      if (abc.indexOf(letters[i]) === j * num % 26)
        s += abc[j];    
  if (s.length !== letters.length) return "Impossible to decode";
  return s;
};