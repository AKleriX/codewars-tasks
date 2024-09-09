const nbaCup = (resultSheet, toFind) => {
  if (!toFind) return '';
  let w = 0,
    d = 0,
    l = 0,
    s = 0,
    c = 0,
    p = 0,
    played = false;

  for (let g of resultSheet.split(',')) {
    if (g.match(/\d+\.\d+/)) return `Error(float number):${g.trim()}`;
    let m = g.match(/(.+) (\d+) (.+) (\d+)$/);
    if (m) {
      let [team1, score1, team2, score2] = [m[1].trim(), +m[2], m[3].trim(), +m[4]];
      if (team1 === toFind || team2 === toFind) {
        played = true;
        let sc1 = team1 === toFind ? score1 : score2,
          sc2 = team1 === toFind ? score2 : score1;
        s += sc1;
        c += sc2;
        if (sc1 > sc2) {
          w++;
          p += 3;
        } else if (sc1 < sc2) l++;
        else {
          d++;
          p++;
        }
      }
    }
  }
  return !played
    ? `${toFind}:This team didn't play!`
    : `${toFind}:W=${w};D=${d};L=${l};Scored=${s};Conceded=${c};Points=${p}`;
};
