function declareWinner(fighter1, fighter2, firstAttacker) {
    let strong1 = Math.ceil(fighter1.health / fighter2.damagePerAttack),
        strong2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return strong1 > strong2 ? fighter1.toString() : (strong1 < strong2 ? fighter2.toString() : firstAttacker);
  }