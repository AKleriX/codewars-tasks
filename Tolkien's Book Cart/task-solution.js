const calculateCartTotal = (cart_contents) => {
  let map = {};
  for (let b of cart_contents) map[b] = (map[b] || 0) + 1;

  let sum = 0;

  while (true) {
    let unique = 0;
    for (let b in map)
      if (map[b] > 0) {
        unique++;
        map[b]--;
      }

    if (unique === 4) sum += 32;
    else if (unique === 3) sum += 27;
    else if (unique === 2) sum += 19;
    else if (unique === 1) sum += 10;

    if (Object.values(map).every((v) => v === 0)) break;
  }

  return sum;
};
