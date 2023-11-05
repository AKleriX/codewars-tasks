const args = (cmd) =>
  cmd
    .split(/[&;>|]/)[0]
    .trim()
    .split(' ');
