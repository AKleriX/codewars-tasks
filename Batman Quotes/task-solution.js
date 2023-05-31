const getQuote = function (quotes, hero) {
  let idx = +hero.match(/\d+/g)[0];
  return `${hero[0] === 'B' ? 'Batman' : hero[0] === 'R' ? 'Robin' : 'Joker'}: ${quotes[idx]}`;
};
