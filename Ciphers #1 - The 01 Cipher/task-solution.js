const encode = (plaintext) =>
  [...plaintext.toLowerCase()]
    .map((s) => (/[a-z]/.test(s) ? (s.charCodeAt(0) - 95) % 2 : s))
    .join('');
