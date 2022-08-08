function sursurungal(txt) {
  let words = txt.split(/\s+/),
    spaces = txt.split(/\S+/);
  for (let i = 0; i < txt.length - 1; i++)
    if (/^\d+$/.test(words[i]) && words[i] !== '0' && words[i] !== '1') {
      if (words[i] === '2') words[i + 1] = 'bu' + words[i + 1].slice(0, -1);
      else if (+words[i] < 10) words[i + 1] = words[i + 1].slice(0, -1) + 'zo';
      else words[i + 1] = 'ga' + words[i + 1].slice(0, -1) + 'ga';
      i++;
    }
  return words.map((w, i) => w + spaces[i + (/\s/.test(txt[0]) ? 0 : 1)]).join('');
}
