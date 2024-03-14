const contact = (hallway) => {
  const comeAcross = hallway.match(/>-*</g) || [],
    smallestDistant = Math.min(...comeAcross.map((s) => s.length)) - 2;
  return comeAcross.length ? (smallestDistant ? Math.floor(smallestDistant / 2) + 1 : 1) : -1;
};
