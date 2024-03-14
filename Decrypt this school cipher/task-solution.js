const decrypt = (str) => {
  const newStr = str.replace(/'\d+'/g, (d) => String.fromCharCode(+d.slice(1, -1)));
  return [...newStr].reverse().join('');
};
