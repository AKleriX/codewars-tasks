function decode(message) {
  const abc = 'abcdefghijklmnopqrstuvwxyz',
    revAbc = [...abc].reverse().join('');
  return message.replace(/[a-z]/g, (l) => revAbc[abc.indexOf(l)]);
}
