function electionsWinners(votes, k) {
  const sortArr = [...votes].sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < votes.length; i++) if (votes[i] + k > sortArr[0]) res++;
  return sortArr[0] === sortArr[1] && !k ? 0 : sortArr[0] !== sortArr[1] && !k ? 1 : res;
}
