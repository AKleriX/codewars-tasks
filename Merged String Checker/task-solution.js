function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) : 
              s[0] === part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
              s[0] === part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}