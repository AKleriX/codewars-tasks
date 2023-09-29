const match = (usefulness, months) =>
  getPick(months) <= usefulness.reduce((s, n) => s + n, 0) ? 'Match!' : 'No match!';

const getPick = (m, v = 100) => (m ? getPick(m - 1, v * 0.85) : v);
