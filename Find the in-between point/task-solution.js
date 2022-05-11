function middle_point(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
  let l1 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2),
    l2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2 + (z3 - z2) ** 2),
    l3 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2 + (z1 - z3) ** 2),
    maxLine = Math.max(l1, l2, l3);
  return maxLine === l1 ? 3 : maxLine === l2 ? 1 : 2;
}
