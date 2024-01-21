const gimmeTheLetters = (sp) => {
  const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return abc.slice(abc.indexOf(sp[0]), abc.indexOf(sp[2]) + 1);
};
