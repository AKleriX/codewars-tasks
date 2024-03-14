const higherVersion = (ver1, ver2) => {
  const arrVer2 = ver2.split('.').map(Number),
    arrVer1 = ver1.split('.').map(Number),
    pos2 = arrVer1.findIndex((n, i) => n < arrVer2[i]),
    pos1 = arrVer1.findIndex((n, i) => n > arrVer2[i]);
  return (pos2 === -1 && pos1 > pos2) || (pos1 < pos2 && pos1 > -1);
};
