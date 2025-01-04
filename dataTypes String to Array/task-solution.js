const dataTypes = (string) => {
  const spacedBooleans = string.replace(/true|false/gi, ' $& '),
    spacedTokens = spacedBooleans.replace(/[A-z]+|\d+/g, ' $& '),
    lowercaseTokens = spacedTokens.toLowerCase(),
    tokens = lowercaseTokens.split(' ').filter((e) => e);

  return tokens.map((token) => {
    if (token === 'true' || token === 'false') return 'boolean';
    if (+token === +token) return 'number';
    return 'string';
  });
};
