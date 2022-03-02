function compareVersions(version1, version2) {
  let ver1 = version1.split('.'),
    ver2 = version2.split('.');
  for (let i = 0; i < Math.min(ver1.length, ver2.length); i++) {
    if (Number(ver1[i]) > Number(ver2[i])) return true;
    if (Number(ver1[i]) < Number(ver2[i])) return false;
  }
  return ver1.length >= ver2.length;
}
