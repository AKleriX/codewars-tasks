const stolenLunch = (note) => {
  return note
    .split('')
    .map((char) => {
      if (char >= '0' && char <= '9') return String.fromCharCode('a'.charCodeAt(0) + (char - '0'));
      if (char >= 'a' && char <= 'j') return (char.charCodeAt(0) - 'a'.charCodeAt(0)).toString();
      return char;
    })
    .join('');
};
