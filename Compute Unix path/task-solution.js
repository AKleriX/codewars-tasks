function combinePathsUri(...paths) {
  let path = '/';
  for (let i = 0; i < paths.length; i++)
    if (paths[i].trim() !== '') {
      let currentPath = paths[i].replace(/ /g, '').replace(/\\/g, '/');
      if (currentPath[0] === '/') currentPath = currentPath.slice(1);
      path += currentPath + (currentPath.slice(-1) === '/' ? '' : '/');
    }
  path = path.replace(/\/+/g, '/');
  return path.length > 1 ? path.slice(0, -1) : path;
}
