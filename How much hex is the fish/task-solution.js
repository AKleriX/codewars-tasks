function fisHex(name) {
  const hexCode = (name.match(/[a-f]/gi) || []).map((c) => parseInt(c, 16));
  return hexCode.length ? hexCode.reduce((xor, c) => xor ^ c) : 0;
}
