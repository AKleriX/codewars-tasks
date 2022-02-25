const points = (games) => games.reduce((score, s) => {
    let x = Number(s.split(':')[0]),
        y = Number(s.split(':')[1]);
    return x > y ? score + 3 : (x < y ? score : score + 1);
  }, 0);