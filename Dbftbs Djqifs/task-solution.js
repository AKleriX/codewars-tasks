function encryptor(key, message) {
  let encode = '';
  for (let i = 0; i < message.length; i++) {
    let currentCode = message[i].toLowerCase().charCodeAt() - 97,
      newCode = (currentCode + key) % 26;
    if (newCode < 0) newCode = 26 + newCode;
    encode += /[a-z]/i.test(message[i])
      ? String.fromCharCode(newCode + (message[i] === message[i].toLowerCase() ? 97 : 65))
      : message[i];
  }
  return encode;
}
