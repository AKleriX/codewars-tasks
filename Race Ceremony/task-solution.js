const racePodium = (blocks) => {
  let p1 = Math.ceil(blocks / 3) + 1,
    p2 = p1 - 1,
    p3 = blocks - p1 - p2;
  return [!p3 ? --p2 : p2, p1, !p3 ? 1 : p3];
};
