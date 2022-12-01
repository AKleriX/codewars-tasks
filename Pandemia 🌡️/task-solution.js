function infected(s) {
  let conts = s.split('X'),
    total = 0,
    inf = 0;
  for (let i = 0; i < conts.length; i++) {
    total += conts[i].length;
    if (conts[i].includes('1')) inf += conts[i].length;
  }
  return total ? (100 * inf) / total : 0;
}
