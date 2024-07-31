const sumAccounts = (text) =>
  text.match(/-?\$\d+/g).reduce((s, v) => s + parseInt(v.replace('$', '')), 0);
