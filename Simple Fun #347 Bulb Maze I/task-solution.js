const bulbMaze = (maze) => {
  for (let i = 0; i < maze.length; i++)
    if ((!(i % 2) && maze[i] === 'o') || (i % 2 && maze[i] === 'x')) return false;
  return true;
};
