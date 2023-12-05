const clockDegree = (s) => {
  if (!checkTime(s)) return 'Check your time !';
  return ((+s.split(':')[0] % 12) * 30 || 360) + ':' + (+s.split(':')[1] * 6 || 360);
};

const checkTime = (t) => /^(0\d|1\d|2[0-3]):([0-5]\d)$/.test(t);
