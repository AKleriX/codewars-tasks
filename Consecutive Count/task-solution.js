function getConsectiveItems(items, key) {
  let strItems = items + '',
    strKey = key + '',
    repeatSubstr = strItems.match(new RegExp(strKey + '*', 'g'));
  return repeatSubstr
    ? repeatSubstr.reduce((maxLength, s) => (s.length > maxLength ? s.length : maxLength), 0)
    : 0;
}
