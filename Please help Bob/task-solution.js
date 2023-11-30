const errBob = (string) =>
  string.replace(/[qwrtypsdfghjklzxcbnm]\b/gi, (c) =>
    c.toUpperCase() === c ? c + 'ERR' : c + 'err',
  );
