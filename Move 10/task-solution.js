const moveTen = (s) =>
  s.replace(/[a-z]/g, (l) => String.fromCharCode(((l.charCodeAt(0) - 87) % 26) + 97));
