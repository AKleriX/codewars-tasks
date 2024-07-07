const findCodwars = (str) => {
  const d = str.replace(/^https?:\/\//, '').split(/[/?#]/)[0];
  return /(^|\.)codwars\.com$/.test(d);
};
