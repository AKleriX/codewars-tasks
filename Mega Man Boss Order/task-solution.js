const getBossOrder = (bosses) => {
  let res = [],
    w = '';
  while (res.length < bosses.length)
    if (!res.length) {
      let firstBoss = bosses.filter((b) => b.difficulty === 1)[0];
      res.push(firstBoss.name);
      w = firstBoss.weapon;
    } else {
      let nextBoss = bosses.filter((b) => b.weakness === w)[0];
      res.push(nextBoss.name);
      w = nextBoss.weapon;
    }
  return res;
};
