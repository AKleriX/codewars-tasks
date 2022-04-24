const searchNames = (logins) =>
  logins.filter((e, i, a) => /^\w+@\w+\.\w+$/.test(e) && /^\.|\.$/.test(a[i - 1]));
