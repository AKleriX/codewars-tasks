function thueMorse(n) {
  let seq = '0';
  while (seq.length < n) {
    let add = '';
    for (let i = 0; i < seq.length; i++) add += seq[i] === '1' ? '0' : '1';
    seq += add;
  }
  return seq.slice(0, n);
}
