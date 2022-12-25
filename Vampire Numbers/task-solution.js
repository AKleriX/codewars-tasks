const vampire_test = function (a, b) {
  let prodStr = [...(a * b).toString()].sort().join(''),
    digitsStr = [...a.toString(), ...b.toString()].sort().join('');
  return prodStr === digitsStr;
};
