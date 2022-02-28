const rankings = (arr) => {
    let sortArr = [...arr].sort((a, b) => b - a);
    return arr.map(num => sortArr.indexOf(num) + 1);
  }