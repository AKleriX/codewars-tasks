const shortForm = (str) =>
  str[0] +
  str.slice(1).replace(/[aeoui]/gi, '') +
  (/[aeoui]/i.test(str.slice(-1)) ? str.slice(-1) : '');
