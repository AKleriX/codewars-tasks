const commonGround = (s1, s2) => {
  const s1Words = s1.split(' '),
    s2Words = s2.split(' '),
    r = [];
  for (let i = 0; i < s2Words.length; i++)
    if (s1Words.includes(s2Words[i]) && !r.includes(s2Words[i])) r.push(s2Words[i]);
  return r.length ? r.join(' ') : 'death';
};
