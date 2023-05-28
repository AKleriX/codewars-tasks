const switchDict = (dic) => {
  const vals = Object.keys(dic),
    keys = Object.values(dic);
  return keys.reduce((o, k) => ((o[k] = vals.filter((v) => dic[v] === k)), o), {});
};
