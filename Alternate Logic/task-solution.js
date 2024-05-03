const alternate = (items) =>
  items.length ? items.reduce((r, v) => (r === v && r ? true : r === v ? false : true)) : null;
