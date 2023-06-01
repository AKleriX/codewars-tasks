function scratch(lottery) {
  return lottery.reduce((s, t) => {
    let sepTic = t.split(' ');
    return s + (sepTic.slice(0, -1).every((a) => a === sepTic[0]) ? +sepTic[3] : 0);
  }, 0);
}
