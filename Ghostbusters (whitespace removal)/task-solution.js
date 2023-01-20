const ghostBusters = (building) =>
  / /.test(building) ? building.replace(/ /g, '') : "You just wanted my autograph didn't you?";
