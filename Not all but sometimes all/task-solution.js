function remove(str, what) {
  for (let s in what) for (let i = 0; i < what[s]; i++) str = str.replace(s, '');
  return str;
}
