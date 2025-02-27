const hypertensive = (patients) => {
  return patients.filter((p) => {
    if (
      p.some((m) => {
        let [s, d] = m.split('/').map(Number);
        return s >= 180 && d >= 110;
      })
    )
      return true;
    if (p.length < 2) return false;
    let sTotal = 0,
      dTotal = 0;
    p.forEach((m) => {
      let [s, d] = m.split('/').map(Number);
      sTotal += s;
      dTotal += d;
    });
    return sTotal / p.length >= 140 || dTotal / p.length >= 90;
  }).length;
};
