const createReport = (name) => {
  let speciesCounts = {};
  for (let report of name) {
    report = report.trim();
    if (!report) continue;
    let tokens = report.split(/\s+/),
      count = parseInt(tokens[tokens.length - 1], 10),
      speciesName = tokens.slice(0, tokens.length - 1).join(' '),
      normalizedName = speciesName.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();

    if (normalizedName === 'Labrador Duck') return ['Disqualified data'];

    let code = getDuckCode(speciesName);

    if (speciesCounts.hasOwnProperty(code)) speciesCounts[code] += count;
    else speciesCounts[code] = count;
  }

  let sortedCodes = Object.keys(speciesCounts).sort(),
    result = [];
  for (let code of sortedCodes) {
    result.push(code);
    result.push(speciesCounts[code]);
  }
  return result;
};

const getDuckCode = (name) => {
  let words = name.replace(/-/g, ' ').split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 6).toUpperCase();
  if (words.length === 2) return (words[0].slice(0, 3) + words[1].slice(0, 3)).toUpperCase();
  if (words.length === 3)
    return (words[0].slice(0, 2) + words[1].slice(0, 2) + words[2].slice(0, 2)).toUpperCase();
  return (
    words[0].slice(0, 1) +
    words[1].slice(0, 1) +
    words[words.length - 2].slice(0, 2) +
    words[words.length - 1].slice(0, 2)
  ).toUpperCase();
};
