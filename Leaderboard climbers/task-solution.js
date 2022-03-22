function leaderboardSort(leaderboard, changes) {
  let currentLeader = [...leaderboard];
  for (let i = 0; i < changes.length; i++) {
    let [name, move] = changes[i].split(' '),
      oldIndex = currentLeader.indexOf(name),
      newIndex = oldIndex + -1 * Number(move) + (move[0] === '-' ? 1 : 0);
    currentLeader.splice(newIndex, 0, name);
    currentLeader.splice(oldIndex < newIndex ? oldIndex : oldIndex + 1, 1);
  }
  return currentLeader;
}
