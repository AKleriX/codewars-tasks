const rank = (car) => {
  const dict = { T: 10, J: 11, Q: 12, K: 13, A: 14 };
  return /[2-9TJQKA]/.test(car[0]) ? (dict.hasOwnProperty(car[0]) ? dict[car[0]] : +car[0]) : 0;
};
