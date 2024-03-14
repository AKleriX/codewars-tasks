const strangeCode = (s, e) => {
  let str = '';
  while (s < e - 1) {
    s++;
    e--;
    if (!str.length || str.slice(-1) === 'b') str += 'a';
    else str += 'b';
  }
  return str;
};
