const popShift = (s) => [
  s.length === 1 ? '' : [...s.slice(-((s.length / 2) | 0))].reverse().join(''),
  s.slice(0, -((s.length / 2) | 0) - (!(s.length % 2) ? 0 : 1)),
  s.length % 2 ? s[Math.ceil(s.length / 2 - 1)] : '',
];
