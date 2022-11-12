const makeString = (s) => (s.match(/(?=\b)\w/g) || []).join('');
