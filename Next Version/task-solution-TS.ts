export function nextVersion(version : string): string{
  let ver: string[] = version.split('.');
  for (let i = ver.length - 1; i >= 0; i--)
    if (ver[i] === '9') ver[i] = '0';
    else{
      ver[i] = (Number(ver[i])  + 1).toString();
      return ver.join('.');
    }
  return '1' + ver.join('.');
}