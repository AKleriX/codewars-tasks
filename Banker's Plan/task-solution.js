function fortune(f0, p, c0, n, i) {
    let f = Math.trunc(f0),
        c =  Math.trunc(c0);
    for (let year = 1; year < n; year++){
      f = Math.trunc(f + (p / 100) * f - c);
      c = Math.trunc(c + c * (i /100));
      if (f < 0) return false;
    }    
    return true;
  }