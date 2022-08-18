String.prototype.parseManaCost = function () {
  let str = this.toLowerCase(),
    num = +str.replace(/\D/g, ''),
    manaTypes = str.replace(/\d/g, ''),
    parse = {};
  if (!/^\d*[wubrg]*$/.test(str)) return null;
  if (num > 0) parse['*'] = num;
  for (let i = 0; i < manaTypes.length; i++) parse[manaTypes[i]] = (parse[manaTypes[i]] || 0) + 1;
  return parse;
};
