function CaesarCryptoEncode(text = '', shift) {
  if (!text) return '';
  const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let codeStr = '';
  shift = shift % 26;
  for (let i = 0; i < text.length; i++) {
    if (/[a-z]/i.test(text[i])) {
      let c = abc.indexOf(text[i]) + shift;
      codeStr += abc[c >= abc.length ? c - abc.length : c < 0 ? abc.length + c : c];
    } else codeStr += text[i];
  }
  return codeStr.trim();
}
