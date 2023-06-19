function HTMLGen() {
  const funcs = ['a', 'b', 'p', 'body', 'div', 'span', 'title', 'comment'];
  let o = {};
  for (let i = 0; i < funcs.length; i++)
    if (funcs[i] !== 'comment') o[funcs[i]] = (s) => `<${funcs[i]}>${s}</${funcs[i]}>`;
    else o[funcs[i]] = (s) => `<!--${s}-->`;
  return o;
}
