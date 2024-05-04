const fifa = (ticket, results) => {
  let res = 0,
    idx = 0;
  for (let t in ticket) {
    const [h, a] = results[idx].split('-').map(Number);
    if ((t === 'Home' && h > a) || (t === 'Away' && a > h) || (t === 'Draw' && a === h))
      res += +ticket[t].slice(1);
    idx++;
  }
  return `£${res}`;
};
