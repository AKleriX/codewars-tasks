const testit = (s) =>
  s.replace(/../g, (p) => String.fromCharCode((p.charCodeAt(0) + p.charCodeAt(1)) / 2));
