const generateCurrencyMatrix = (c) => {
  const seq = ['EUR', 'GBP', 'AUD', 'NZD', 'USD', 'CAD', 'CHF', 'JPY'],
    idx = seq.indexOf(c);
  return seq.map((v, i) => (i === idx ? null : i < idx ? v + c : c + v)).filter((v) => v);
};
