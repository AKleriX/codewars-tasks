const alienLanguage = (str) =>
  str.replace(/\b([a-z]+)([a-z])\b/gi, (_, p1, p2) => p1.toUpperCase() + p2.toLowerCase());
