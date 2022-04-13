function oneDown(str) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let decode = '';
  if (typeof str !== 'string') return 'Input is not a string';
  for (let i = 0; i < str.length; i++)
    if (abc.includes(str[i])) decode += str[i] === 'A' ? 'z' : abc[abc.indexOf(str[i]) - 1];
    else decode += str[i];
  return decode;
}
