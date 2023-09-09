const valAndUnits = (s) =>
  s
    .match(/-?[0-9.]+|[^\d ]+/g)
    .reduce((o, v, i) => (!i ? ((o.val = +v), o) : ((o.units = v), o)), { units: '' });
