function loveLanguage(partner, weeks) {
  const lengs = ['words', 'acts', 'gifts', 'time', 'touch'];
  let fiveDays = (weeks * 7) / 5,
    counter = {};
  for (let i = 0; i < weeks * 7; i++)
    if (partner.response(lengs[i % 5]) === 'positive')
      counter[lengs[i % 5]] = (counter[lengs[i % 5]] || 0) + 1;
  return Object.keys(counter).reduce((max, leng) => (counter[leng] > counter[max] ? leng : max));
}
