const replaceAll = (seq, find, replace) =>
  typeof seq === 'string'
    ? [...seq].map((el) => (el === find ? replace : el)).join('')
    : [...seq].map((el) => (el === find ? replace : el));
