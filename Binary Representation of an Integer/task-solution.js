const showBits = (n) =>
  [...(n >= 0 ? n : 4294967295 + n + 1).toString(2).padStart(32, '0')].map(Number);
