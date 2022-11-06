const addLetters = (...letters) => {
  return String.fromCharCode(letters.reduce((sum, l) => (sum + l.charCodeAt() - 96) % 26, 25) + 97);
};
