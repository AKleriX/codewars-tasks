function covfefe(str) {
  let currentStr = str.replace(/coverage/g, 'covfefe');
  return currentStr === str ? currentStr + ' covfefe' : currentStr;
}
