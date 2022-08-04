function mixwords(str) {
  if (typeof str === 'string')
    return str
      .split(' ')
      .map((w) => {
        let sign = /[.!?,]/.test(w.slice(-1)) ? w.slice(-1) : '',
          word = /[.!?,]/.test(w.slice(-1)) ? w.slice(0, -1) : w;
        if (word.length <= 3) return word + sign;
        let mid = word.slice(1, -1),
          newMid = [];
        for (let i = 0; i < mid.length; i++) {
          let rnd = getRandom(0, mid.length - 1);
          while ((rnd === i && i < mid.length - 1) || newMid[rnd])
            rnd = getRandom(0, mid.length - 1);
          newMid[rnd] = mid[i];
        }
        return word[0] + newMid.join('') + word.slice(-1) + sign;
      })
      .join(' ');
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
