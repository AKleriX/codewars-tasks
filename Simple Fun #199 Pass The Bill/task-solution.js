const passTheBill = (totalMembers, conservativePartyMembers, reformistPartyMembers) => {
  const neededVotes = Math.floor(totalMembers / 2) + 1,
    ind = totalMembers - conservativePartyMembers - reformistPartyMembers;
  return neededVotes <= conservativePartyMembers
    ? 0
    : neededVotes - conservativePartyMembers > ind
    ? -1
    : neededVotes - conservativePartyMembers;
};
