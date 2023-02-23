function compose(s1, s2) {
  let rows = [],
    s1Arr = s1.split('\n'),
    s2Arr = s2.split('\n');
  for (let i = 0; i < s1Arr.length; i++)
    rows.push(s1Arr[i].slice(0, i + 1) + s2Arr[s2Arr.length - i - 1].slice(0, s2Arr.length - i));
  return rows.join('\n');
}
