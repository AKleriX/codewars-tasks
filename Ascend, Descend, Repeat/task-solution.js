function ascendDescend(length, minimum, maximum) {
  let pattern = [],
    rep = '';
  if (minimum > maximum) return '';
  for (let i = minimum; i <= maximum; i++) pattern.push(i);
  if (pattern.length === 1) return pattern[0].toString().repeat(length).slice(0, length);
  for (let i = 0; rep.length < length; i++)
    if (!i) rep += pattern.join('');
    else if (!(i % 2)) rep += pattern.slice(1).join('');
    else rep += [...pattern].reverse().slice(1).join('');
  return rep.slice(0, length);
}
