const sentencify = (words) =>
  (words[0][0].toUpperCase() + words[0].slice(1) + ' ' + words.slice(1).join(' ')).trim() + '.';
