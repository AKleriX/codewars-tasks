function sha256Cracker(hash, chars) {
  const crypto = require('crypto');
  let p = [];
  for (let i = 0; i < fact(chars.length); i++) p.push(permutation(i, [...chars]).join(''));
  for (let i = 0; i < p.length; i++)
    if (hash === crypto.createHash('sha256').update(p[i]).digest('hex')) return p[i];
  return null;
}

const permutation = (idx, arr) => {
  let res = [],
    p = idx + 1,
    len = arr.length;
  for (let i = 1; i <= len; i++) {
    let f = fact(len - i),
      k = Math.floor((p - 1 + f) / f);
    res.push(arr.splice(k - 1, 1)[0]);
    p -= (k - 1) * f;
  }
  if (arr.length) res.push(arr[0]);
  return res;
};

const fact = (n) => (n === 0 ? 1 : n * fact(n - 1));
