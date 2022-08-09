const intersect = (...arrs) =>
  arrs[0] ? arrs[0].filter((el) => arrs.every((a) => a.includes(el))) : [];
