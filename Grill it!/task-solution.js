function grille(message, code) {
  let stencilCode =
    code.toString(2).length < message.length
      ? '0'.repeat(message.length - code.toString(2).length) + code.toString(2)
      : code.toString(2);
  if (stencilCode.length !== message.length) stencilCode = stencilCode.slice(-message.length);
  return [...message].filter((s, i) => stencilCode[i] === '1').join('');
}
