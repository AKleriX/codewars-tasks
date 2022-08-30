function encode(message, key, initShift) {
  let abc = getAbc(key),
    shift = initShift,
    code = '';
  for (let i = 0; i < message.length; i++) {
    if (/[a-z]/.test(message[i])) {
      let codeIdx = abc.indexOf(message[i]);
      code += abc[(abc.indexOf(message[i]) + shift) % 26];
      shift = codeIdx + 1;
    } else code += message[i];
  }
  return code;
}

function decode(message, key, initShift) {
  let abc = getAbc(key),
    shift = initShift % 26,
    decode = '';
  for (let i = 0; i < message.length; i++) {
    if (/[a-z]/.test(message[i])) {
      let codeIdx = abc.indexOf(message[i]) - shift;
      decode += abc[codeIdx < 0 ? 26 + codeIdx : codeIdx];
      shift = (codeIdx < 0 ? 26 + codeIdx : codeIdx) + 1;
    } else decode += message[i];
  }
  return decode;
}

const getAbc = (key) => {
  let abc = 'abcdefghijklmnopqrstuvwxyz',
    regExp = new RegExp('[' + key + ']', 'g'),
    startAbc = Array.from(new Set(key)).join('');
  return startAbc + abc.replace(regExp, '');
};
