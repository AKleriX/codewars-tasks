function solve(st) {
  let vals = [];
  for (let i = 0; i < st.length; i++) vals.push([st[i], st.lastIndexOf(st[i]) - st.indexOf(st[i])]);
  return vals.sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))[0][0];
}
