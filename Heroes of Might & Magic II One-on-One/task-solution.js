function whoWouldWin(...mons) {
  let attack = 0,
    hp = [mons[0].hitpoints, mons[1].hitpoints];
  while (mons[0].number > 0 && mons[1].number > 0) {
    let power = mons[attack].damage * mons[attack].number,
      hps = (mons[+!attack].number - 1) * mons[+!attack].hitpoints + hp[+!attack] - power;
    mons[+!attack].number = Math.ceil(hps / mons[+!attack].hitpoints);
    hp[+!attack] = hps - (mons[+!attack].number - 1) * mons[+!attack].hitpoints;
    attack = +!attack;
  }
  return `${mons[+!attack].number} ${mons[+!attack].type}(s) won`;
}
