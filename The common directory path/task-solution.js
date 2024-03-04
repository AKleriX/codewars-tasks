const getCommonDirectoryPath = (paths) => {
  let arrPaths = paths.map((p) => p.split('/')).sort((a, b) => a.length - b.length),
    seq = [];
  for (let i = 0; i < arrPaths[0].length; i++)
    if (arrPaths.every((p) => p[i] === arrPaths[0][i])) seq.push(arrPaths[0][i]);
    else break;
  return seq.length ? seq.join('/') + '/' : '';
};
