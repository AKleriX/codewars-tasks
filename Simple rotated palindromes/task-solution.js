function solve(st) {
  let checkPattern = st + st;
  for (let i = 1; i < st.length; i++)
    if (
      checkPattern.slice(i, i + st.length) ===
      [...checkPattern.slice(i, i + st.length)].reverse().join('')
    )
      return true;
  return false;
}
