export const decrypt = (str: string): string => {
  const newStr: string = str.replace(/'\d+'/g, (d) => String.fromCharCode(+d.slice(1, -1)));
  return [...newStr].reverse().join('');
};
