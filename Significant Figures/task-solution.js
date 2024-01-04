const numberOfSigfigs = (n) => {
  if (!n.includes('.')) n = n.replace(/0+$/, '');
  return n.includes('.') && /^0+\./.test(n) && /\.0+$/.test(n)
    ? 1
    : n.replace(/^0+(\.)*0*/, '').replace(/\./, '').length;
};
