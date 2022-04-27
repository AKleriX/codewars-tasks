function select(memory) {
  let names = memory.split(', '),
    hateNames = new Set();
  names.forEach((n, i, a) => {
    if (n[0] === '!') {
      hateNames.add(n.slice(1));
      if (i < a.length - 1) hateNames.add(a[i + 1]);
    }
  });
  return names.filter((n) => n[0] !== '!' && !hateNames.has(n)).join(', ');
}
