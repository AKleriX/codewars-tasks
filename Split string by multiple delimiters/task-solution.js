const multipleSplit = (string, delimiters = []) => {
  let re = new RegExp(delimiters.map((s) => '\\' + s).join('|'), 'g');
  return delimiters.length ? string.split(re).filter((s) => s) : [string].filter((s) => s);
};
