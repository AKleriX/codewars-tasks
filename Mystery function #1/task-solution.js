function solved(str){
  if (!(str.length % 2)) return [...str].sort().join('');
  return [...(str.slice(0, Math.trunc(str.length / 2)) + str.slice(Math.trunc(str.length / 2) + 1))].sort().join('');
}