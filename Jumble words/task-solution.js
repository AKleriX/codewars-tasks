const jumble = (string) =>
  string
    .split(' ')
    .map((w) => {
      let p = /[.,!?]$/.test(w) ? w.slice(-1) : '',
        cw = /[.,!?]$/.test(w) ? w.slice(0, -1) : w;
      if (cw.length < 4) return cw + p;
      return cw[0] + [...cw.slice(1, -1)].reverse().join('') + cw.slice(-1) + p;
    })
    .join(' ');
