const emoCounter = [':D', ':)', ':|', ':(', 'T_T'];

const sortEmotions = (arr, order) =>
  arr
    .map((e) => [e, emoCounter.indexOf(e)])
    .sort((a, b) => (order ? a[1] - b[1] : b[1] - a[1]))
    .map((e) => e[0]);
