const decipher = (cipher) => {
  let res = '',
    currentNum = '';
  for (let i = 0; i < cipher.length; i++) {
    currentNum += cipher[i];
    if (/[a-z]/.test(String.fromCharCode(+currentNum))) {
      res += String.fromCharCode(+currentNum);
      currentNum = '';
    }
  }
  return res;
};
