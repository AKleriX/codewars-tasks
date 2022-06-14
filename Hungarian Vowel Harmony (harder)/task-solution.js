function instrumental(word) {
  const vowelPairs = {
    a: 'á',
    e: 'é',
    i: 'í',
    o: 'ó',
    u: 'ú',
    ö: 'ő',
    ü: 'ű',
  };
  let newWord = '' + word;
  if (/[aeiouéöíőüűáóú]$/.test(word)) {
    if (vowelPairs.hasOwnProperty(newWord.slice(-1)))
      newWord = newWord.slice(0, -1) + vowelPairs[newWord.slice(-1)];
    if (/[eéiíöőüű]$/.test(newWord)) newWord += 'vel';
    else newWord += 'val';
  } else {
    if (/(sz|zs|cs)$/.test(newWord)) newWord = newWord.slice(0, -1) + newWord.slice(-2);
    else newWord = newWord + newWord.slice(-1);
    let lastVowel = newWord.replace(/[^aeiouéöíőüűáóú]/g, '').slice(-1);
    if (/[eéiíöőüű]/.test(lastVowel)) newWord += 'el';
    else newWord += 'al';
  }
  return newWord;
}
