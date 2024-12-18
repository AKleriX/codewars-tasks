const replace = (s) => {
  if (!s) return '';

  const pairs = { '!': '?', '?': '!', ' ': '*' };
  let segments = s
    .split('')
    .map((char, idx) => (char !== s[idx + 1] ? char + ' ' : char))
    .join('')
    .trim()
    .split(' ');

  for (let i = 0; i < segments.length; i++) {
    let pairIdx = segments.indexOf(pairs[segments[i][0]].repeat(segments[i].length));
    if (pairIdx > -1) {
      let replacement = segments[i].replace(/./g, ' ');
      segments[i] = replacement;
      segments[pairIdx] = replacement;
    }
  }

  return segments.join('');
};
