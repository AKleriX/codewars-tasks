const asciiEncrypt = (plaintext) => [...plaintext].map(getCorrectSymbol(true)).join('');

const asciiDecrypt = (ciphertext) => [...ciphertext].map(getCorrectSymbol(false)).join('');

const getCorrectSymbol = (e) => (s, i) => String.fromCharCode(s.charCodeAt(0) + (e ? 1 : -1) * i);
