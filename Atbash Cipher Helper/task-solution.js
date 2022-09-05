function AtbashCipher(abc) {
  this.encode = function (str) {
    return atbachCode(abc, str);
  };
  this.decode = function (str) {
    return atbachCode(abc, str);
  };
}

const atbachCode = (abc, str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let pos = abc.indexOf(str[i]);
    if (pos === -1) newStr += str[i];
    else newStr += abc[abc.length - pos - 1];
  }
  return newStr;
};
