const translate = (word) =>
  word.length > 1 ? (/^[aeoui]/.test(word) ? word + 'ay' : word.slice(1) + word[0] + 'ay') : word;
