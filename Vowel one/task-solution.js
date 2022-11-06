const vowelOne = (s) => s.replace(/./g, (m) => (/[aeiou]/i.test(m) ? 1 : 0));
