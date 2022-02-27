function nexus(users) {
  let minDistant = Math.abs(Object.values(users)[0] - Number(Object.keys(users)[0])),
      minDifRank = Object.keys(users)[0];
  for (let rank in users)
    if (Math.abs(users[rank] - Number(rank)) < minDistant){
      minDistant = Math.abs(users[rank] - Number(rank));
      minDifRank = Number(rank);
    }
  return minDifRank;
}