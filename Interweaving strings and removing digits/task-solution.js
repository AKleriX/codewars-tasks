const interweave = (s1, s2) => {
  let res = '';
  for (let i = 0; i < s1.length; i++) res += s1[i] + (s2[i] ? s2[i] : '');
  return res.replace(/\d/g, '');
};
