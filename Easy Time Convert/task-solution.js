const timeConvert = (num) =>
  num < 1
    ? `00:00`
    : `${(num < 600 ? '0' : '') + ((num / 60) | 0)}:${('0' + (num % 60)).slice(-2)}`;
