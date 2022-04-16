const reverseCase = (string) =>
  string.replace(/(.)\1+/g, (s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()));
