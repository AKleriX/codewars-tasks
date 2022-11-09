const splitInParts = (s, partLength) =>
  s.replace(new RegExp('.{' + partLength + '}', 'g'), (m) => m + ' ').trim();
