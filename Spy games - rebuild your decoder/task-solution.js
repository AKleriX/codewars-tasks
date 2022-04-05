function decrypt(code) {
  return code
    .split(' ')
    .map((w) => {
      let symCode =
        [...w].reduce((sum, sym) => (!isNaN(Number(sym)) ? sum + Number(sym) : sum), 0) % 27;
      return symCode ? String.fromCharCode(symCode + 96) : ' ';
    })
    .join('');
}
