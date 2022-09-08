const flip = (d, a) => [...a].sort((c1, c2) => (d === 'R' ? c1 - c2 : c2 - c1));
