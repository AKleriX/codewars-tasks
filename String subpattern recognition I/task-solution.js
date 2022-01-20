function hasSubpattern(string){
    for (let i = 1; i <= Math.trunc(string.length / 2); i++)
      if (!(string.length % i) && (string.slice(0, i).repeat(string.length / i) === string)) return true;
    return false;
  }