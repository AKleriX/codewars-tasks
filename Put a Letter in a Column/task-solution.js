const buildRowText = (index, character) =>
  '|' + Array.from({ length: 9 }, (_, i) => (i === index ? character : ' ')).join('|') + '|';
