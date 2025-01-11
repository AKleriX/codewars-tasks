const automaton = (e) => {
  if (typeof e === 'string') return e.replace(/[^aeiouAEIOU]/g, '').length;
  else if (typeof e === 'number') {
    if (!Number.isInteger(e) || e < 2) return false;

    for (let i = 2; i * i <= e; i++) if (e % i === 0) return false;

    return true;
  } else if (typeof e === 'object' && e !== null) {
    const a = {};

    for (const k in e) a[e[k]] = String(k);

    return a;
  }

  return null;
};
