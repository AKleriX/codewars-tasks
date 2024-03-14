const sc = (obj) =>
  typeof obj === 'number' || typeof obj === 'string'
    ? [...obj.toString()].reverse().join('') === obj.toString()
    : [...obj].reverse().join('') === obj.join('');
