const id = (c_str) =>
  /[A-Z]/.test(c_str)
    ? /^[a-z]+$/i.test(c_str)
      ? 'camel'
      : 'none'
    : /_/.test(c_str)
    ? /^[a-z_]+$/.test(c_str) && !c_str.includes('__')
      ? 'snake'
      : 'none'
    : /^[a-z\-]+$/.test(c_str) && !c_str.includes('--')
    ? 'kebab'
    : 'none';
