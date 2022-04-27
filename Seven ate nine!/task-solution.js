function hungrySeven(arr) {
  let str = arr.join('');
  while (str.match(/789/)) str = str.replace(/789/, '897');
  return [...str].map(Number);
}
