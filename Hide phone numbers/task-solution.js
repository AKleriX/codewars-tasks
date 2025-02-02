const encryptNum = (number) => {
  const italianRegex = /^(?:(\+39)|(0039))([ .]?)(\d{3})\3(\d{3})\3(\d{4})$/,
    usRegex = /^1([ .-]?)(\d{3})\1(\d{3})\1(\d{4})$/;
  let m;
  if ((m = number.match(italianRegex))) {
    const prefix = m[1] ? m[1] : m[2],
      sep = m[3];
    return prefix + sep + m[4] + sep + m[5].charAt(0) + 'XX' + sep + 'XXXX';
  }
  if ((m = number.match(usRegex))) {
    const sep = m[1];
    return '1' + sep + m[2] + sep + m[3].charAt(0) + 'XX' + sep + 'XXXX';
  }
  return false;
};
