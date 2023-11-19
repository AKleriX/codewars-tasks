const purifyTheStratholme = (s) =>
  s
    .replace(/\S{0,1}i+\S{0,1}/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
