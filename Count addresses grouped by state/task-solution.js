function count(addresses) {
  let statesCounter = addresses.reduce((s, a) => {
    if (!a.state) throw new Error('Invalid input');
    return (s[a.state] = (s[a.state] || 0) + 1), s;
  }, {});
  return Object.keys(statesCounter).map((state) => ({ state: state, count: statesCounter[state] }));
}
