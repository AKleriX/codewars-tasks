function solve(time) {
  const hoursDic = {
      0: 'midnight',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
    },
    minutesDic = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'threeteen',
      14: 'fourteen',
      15: 'quarter',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'half',
    };
  let [hours, minutes] = time.split(':').map(Number),
    prep = 'past';
  if (minutes > 30) {
    minutes = 60 - minutes;
    hours++;
    prep = 'to';
  }
  if (hours !== 12) hours %= 12;
  const strHours = hoursDic[hours],
    strMinutes =
      minutes > 0
        ? minutes > 20 && minutes < 30
          ? 'twenty ' + minutesDic[minutes.toString()[1]]
          : minutesDic[minutes]
        : null;
  return strMinutes
    ? `${strMinutes} ${
        minutes % 15 ? (minutes > 1 ? 'minutes ' : 'minute ') : ''
      }${prep} ${strHours}`
    : hours !== 0
    ? `${strHours} o'clock`
    : strHours;
}
