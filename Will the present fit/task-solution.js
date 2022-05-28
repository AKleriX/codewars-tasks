function willFit(present, box) {
  let sortPres = [...present].sort((a, b) => b - a),
    sortBox = [...box].sort((a, b) => b - a);
  for (let i = 0; i < sortPres.length; i++) if (sortPres[i] + 1 >= sortBox[i]) return false;
  return true;
}
