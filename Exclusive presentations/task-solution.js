function presentationAgenda(friendList) {
  let destsCounter = friendList
      .reduce((c, f) => c.concat(f.dest), [])
      .reduce((c, d) => ((c[d] = c[d] ? c[d] + 1 : 1), c), {}),
    presenters = friendList.map((f) => ({
      person: f.person,
      dest: f.dest.filter((d) => destsCounter[d] === 1),
    }));
  return presenters.filter((p) => p.dest.length);
}
