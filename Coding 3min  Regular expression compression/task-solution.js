function sc(regex) {
  let str = regex.slice(1, -1),
    newRegEx = '';
  for (let i = 1; i < str.length; i++)
    if (str.slice(0, i).repeat((str.length / i) | 0) === str) {
      str = str.slice(0, i);
      break;
    }
  newRegEx =
    str.length === 1
      ? `${str}{${(regex.length - 2) / str.length}}`
      : `(${str}){${(regex.length - 2) / str.length}}`;
  return newRegEx.length < regex.length - 2 ? `/${newRegEx}/` : regex;
}
