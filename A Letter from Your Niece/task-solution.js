const nonsense = (str) => {
  const dict = ['a', 'e', 'i', 'o', 'u'];
  let cStr = str
    .replace(/(trex|raptor)/gi, '')
    .replace(/[0-4]/g, (n) => dict[n])
    .toLowerCase()
    .replace(/\bi\b/g, 'I');
  cStr = cStr[0].toUpperCase() + cStr.slice(1);
  if (cStr.slice(-1) !== '.') cStr += '.';
  return cStr;
};
