const fs = require('fs'),
  path = require('path');

const mkdirp = (...segments) => {
  const fullPath = path.join(...segments),
    parts = fullPath.split(path.sep);

  let currentPath = path.isAbsolute(fullPath) ? path.sep : '';
  for (const part of parts) {
    if (!part) continue;
    currentPath = path.join(currentPath, part);
    if (!fs.existsSync(currentPath)) fs.mkdirSync(currentPath);
  }
};
