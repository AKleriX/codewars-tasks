function birdCode(arr){
  return arr.map(name => {
    let words = name.split(/\-|\s/);
    switch (words.length){
      case 0:
        throw 'Error name';
      case 1:
        return words[0].slice(0, 4).toUpperCase();
      case 2:
        return (words[0].slice(0, 2) + words[1].slice(0, 2)).toUpperCase();
      case 3:
        return (words[0][0] + words[1][0] + words[2].slice(0, 2)).toUpperCase();
      default:
        return (words[0][0] + words[1][0] + words[2][0] + words[3][0]).toUpperCase();
    }
  });
}