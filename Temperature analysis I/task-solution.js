const lowestTemp = (t) => (t.length ? Math.min(...t.split(' ').map(Number)) : null);
