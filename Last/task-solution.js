function last() {
  let lastEl = arguments[arguments.length - 1];
  return typeof lastEl === 'number' ? lastEl : lastEl.slice(-1)[0];
}
