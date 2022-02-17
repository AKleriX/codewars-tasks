function epidemic(tm, n, s0 = 999, i0 = 1, b, a) {
    let r = [0],
        dt = tm / n,
        s = [s0],
        i = [i0];
    for (let j = 0; j < n; j++){
      s.push(s[j] - dt * b * s[j] * i[j]);
      i.push(i[j] + dt * (b * s[j] * i[j] - a * i[j]));
      r.push(r[j] + dt * i[j] * a);
    }
    return Math.trunc(Math.max.apply(null, i));
  }