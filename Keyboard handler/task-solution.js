const handler = (key, isCaps = false, isShift = false) => {
  const dict = {
    '`': '~',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    ';': ':',
    "'": '"',
    '\\': '|',
    ',': '<',
    '.': '>',
    '/': '?',
  };
  if (/^[a-z]$/.test(key))
    return (isCaps && !isShift) || (!isCaps && isShift) ? key.toUpperCase() : key;
  if (typeof key === 'string' && /^[`~1!2@3#4$5%6^7&8*9(0)\-_=+\[\]{};:'"\\|,<.>/?]$/.test(key))
    return isShift && dict.hasOwnProperty(key) ? dict[key] : key;
  return 'KeyError';
};
