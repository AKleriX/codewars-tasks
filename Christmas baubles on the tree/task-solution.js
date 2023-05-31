function baublesOnTree(baubles, branches) {
  let brs = Array.from({ length: branches }, () => 0),
    idx = -1;
  while (baubles-- > 0) brs[++idx % branches]++;
  return branches ? brs : 'Grandma, we will have to buy a Christmas tree first!';
}
