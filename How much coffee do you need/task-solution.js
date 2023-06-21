const howMuchCoffee = (events) =>
  events.reduce((s, e) => {
    if (typeof s === 'number')
      if (/^(cw|dog|cat|movie)$/.test(e)) s += 1;
      else if (/^(CW|DOG|CAT|MOVIE)$/.test(e)) s += 2;
      else return s;
    return s > 3 ? 'You need extra sleep' : s;
  }, 0);
