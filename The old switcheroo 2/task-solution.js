const encode = (str) =>
  str.replace(/[a-z]/gi, (l) => l.charCodeAt(0) - (l.charCodeAt(0) > 96 ? 96 : 64));
