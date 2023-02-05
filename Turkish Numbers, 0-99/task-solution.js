const getTurkishNumber = (num) => {
  const units = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'],
    tens = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];
  return num < 10
    ? units[num]
    : !(num % 10)
    ? tens[num / 10]
    : tens[(num / 10) | 0] + ' ' + units[num % 10];
};
