const countzero = (s) =>
  s.replace(/[^abdegopq069DOPQR]/g, '').length +
  s.replace(/[^%&B8]/g, '').length * 2 +
  (s.match(/\(\)/g) || []).length;
