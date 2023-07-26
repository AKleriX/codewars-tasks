const mirror = (code, abc = 'abcdefghijklmnopqrstuvwxyz') =>
  [...code.toLowerCase()]
    .map((s) => (abc.includes(s) ? abc[abc.length - 1 - abc.indexOf(s)] : s))
    .join('');
