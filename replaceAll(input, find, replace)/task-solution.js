const replaceAll = (input, find, replace) => {
  return input.replace(
    new RegExp(
      find.replace(/[\\\^\$\|\[\]\(\)\{\}\?\+\*\-]/g, (p) => '\\' + p),
      'g',
    ),
    replace,
  );
};
