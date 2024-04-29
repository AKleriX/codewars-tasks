const diplomas = (h, w, n) => {
  let d = Math.ceil(Math.sqrt(h * w * n));
  while (n > Math.floor(d / h) * Math.floor(d / w)) d++;
  return d;
};
