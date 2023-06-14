const reverseIt = (data) => {
  if (typeof data !== 'string' && typeof data !== 'number') return data;
  return typeof data === 'string'
    ? [...data].reverse().join('')
    : +[...data.toString()].reverse().join('');
};
