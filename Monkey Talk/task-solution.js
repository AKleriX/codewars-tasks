const monkeyTalk = (phrase) =>
  phrase
    .split(' ')
    .map((w, i) => (/[aeiou]/i.test(w[0]) ? (!i ? 'Eek' : 'eek') : !i ? 'Ook' : 'ook'))
    .join(' ') + '.';
