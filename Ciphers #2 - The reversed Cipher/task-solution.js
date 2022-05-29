function encode(plaintext) {
  return plaintext
    .split(' ')
    .map((w) => {
      let letters = [...w].reverse();
      return letters.slice(1).join('') + letters[0];
    })
    .join(' ');
}
