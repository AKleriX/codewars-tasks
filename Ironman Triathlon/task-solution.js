function iTri(s) {
  let res = {};
  if (!s) return 'Starting Line... Good Luck!';
  if (s < 2.4) res['Swim'] = `${getFormat(140.6 - s)} to go!`;
  else if (s < 114.4) res['Bike'] = `${getFormat(140.6 - s)} to go!`;
  else if (s < 140.6 && 140.6 - s > 10) res['Run'] = `${getFormat(140.6 - s)} to go!`;
  else res['Run'] = 'Nearly there!';
  return s >= 140.6 ? "You're done! Stop running!" : res;
}

const getFormat = (n) => {
  let str = (Math.round(n * 100) / 100).toString();
  if (str.indexOf('.') === -1 || str.slice(-3)[0] === '.') return str;
  return str + '0';
};
