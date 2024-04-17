const merryChristmas = (s1, s2) => {
  let s1Arr = [...s1];
  for (let i = 0; i < s2.length; i++)
    if (s1Arr.includes(s2[i])) s1Arr.splice(s1Arr.indexOf(s2[i]), 1);
    else s1Arr.push(s2[i]);
  return s1Arr.sort().join('') === [...'Merry Christmas!'].sort().join('');
};
