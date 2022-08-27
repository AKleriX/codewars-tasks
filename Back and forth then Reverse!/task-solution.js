function arrange(s) {
  let pos = 0,
    t = [];
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (i % 2) t.push(s[s.length - 1 - pos], s[pos]);
    else t.push(s[pos], s[s.length - 1 - pos]);
    pos++;
  }
  if (s.length % 2) t.push(s[Math.floor(s.length / 2)]);
  return t;
}
