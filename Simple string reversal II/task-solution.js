const solve = (st, a, b) =>
  st.slice(0, a) + [...st.slice(a, b + 1)].reverse().join('') + st.slice(b + 1);
