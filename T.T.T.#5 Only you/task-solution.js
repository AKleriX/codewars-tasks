const onlyYou = (s) => {
  const you = s.replace(/[^you]/gi, '');
  return /y.*o.*u.*/i.test(you) && !/i|me|he|him|they|them|we/i.test(s);
};
