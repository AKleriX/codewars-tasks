const numObj = (s) =>
  s.map((n) => {
    let obj = {};
    obj[n] = String.fromCharCode(n);
    return obj;
  });
