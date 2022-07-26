function acronymBuster(string) {
  const acrons = {
    KPI: 'key performance indicators',
    EOD: 'the end of the day',
    TBD: 'to be decided',
    WAH: 'work at home',
    IAM: 'in a meeting',
    OOO: 'out of office',
    NRN: 'no reply necessary',
    CTA: 'call to action',
    SWOT: 'strengths, weaknesses, opportunities and threats',
  };
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (/^[A-Z]{3,}\.*$/.test(words[i])) {
      let acron = words[i].slice(-1) === '.' ? words[i].slice(0, -1) : words[i],
        sign = words[i].slice(-1) === '.' ? '.' : '',
        firstLetter = !words[i - 1] || words[i - 1].slice(-1) === '.';
      if (!acrons.hasOwnProperty(acron))
        return `${acron} is an acronym. I do not like acronyms. Please remove them from your email.`;
      words[i] =
        (firstLetter ? acrons[acron][0].toUpperCase() + acrons[acron].slice(1) : acrons[acron]) +
        sign;
    }
  }
  return words.join(' ');
}
