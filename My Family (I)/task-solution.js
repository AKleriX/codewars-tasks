Person.prototype.hasRelationsTo = function (person) {
  return checkBr(this.getChildren(), person, 'c') || checkBr(this.getParents(), person, 'p');
};

const checkBr = (a, person, f) => {
  for (let i = 0; i < a.length; i++)
    if (a[i] === person) return true;
    else {
      let d = checkBr(f === 'c' ? a[i].getChildren() : a[i].getParents(), person, f);
      if (d) return d;
    }
  return false;
};
