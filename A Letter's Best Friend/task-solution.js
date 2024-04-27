const bestFriend = (txt, a, b) =>
  [...txt].every((l, i, t) => l !== a || (l === a && t[i + 1] === b));
