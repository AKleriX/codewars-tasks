function killer(suspectInfo, dead) {
  let suspect = '';
  for (let name in suspectInfo) {
    if (suspectInfo[name].filter((n) => dead.includes(n)).length === dead.length) {
      suspect = name;
      break;
    }
  }
  return suspect;
}
