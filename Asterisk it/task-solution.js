function asteriscIt(n) {
  if (typeof n === 'number') n = n.toString();
  else if (typeof n === 'object') n = n.join('');
  return n.replace(/[02468](?=[02468])/g, (m) => m + '*');
}
