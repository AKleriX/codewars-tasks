const linuxType = (fileAttribut) =>
  ({
    '-': 'file',
    d: 'directory',
    l: 'symlink',
    c: 'character_file',
    b: 'block_file',
    p: 'pipe',
    s: 'socket',
    D: 'door',
  }[fileAttribut[0]]);
