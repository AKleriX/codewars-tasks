function spot(s1, s2) {
  let dif = [];
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) dif.push(i);
  return dif;
}
