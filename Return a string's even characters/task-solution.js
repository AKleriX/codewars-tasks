const evenChars = (string) =>
  string.length < 2 || string.length > 100 ? 'invalid string' : [...string].filter((_, i) => i % 2);
