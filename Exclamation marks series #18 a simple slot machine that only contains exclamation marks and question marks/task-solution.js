const slot = (s) => {
  if (/^(.)\1{4}$/g.test(s)) return 1000;
  else if (/(.)\1{3}/.test(s)) return 800;
  else if (/^(.)\1{2}(.)\2$/.test(s) || /^(.)\1{1}(.)\2{2}$/.test(s)) return 500;
  else if (/(.)\1{2}/.test(s)) return 300;
  else if (/(.)\1.*(.)\2/.test(s)) return 200;
  else if (/(.)\1/.test(s)) return 100;
  return 0;
};
