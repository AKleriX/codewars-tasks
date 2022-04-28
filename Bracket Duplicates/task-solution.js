const stringParse = (string) =>
  typeof string !== 'string'
    ? 'Please enter a valid string'
    : string.replace(/([a-zA-Z])\1(\1+)/g, '$1$1[$2]');
