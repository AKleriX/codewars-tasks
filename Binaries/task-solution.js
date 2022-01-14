function code(strng) {
    return strng.split('').map(d => {
      let bin = Number(d).toString(2);
      return '0'.repeat(bin.length - 1) + '1' + bin;
    }).join('');
}
function decode(str) {
  let num = '',
      binStr = '' + str;
  while (binStr.length){
    num += parseInt(binStr.slice(binStr.indexOf('1') + 1, 2 * (binStr.indexOf('1') + 1)), 2);
    binStr = binStr.slice(2 * (binStr.indexOf('1') + 1));
  }
  return num;
}