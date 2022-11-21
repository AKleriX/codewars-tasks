//preload variable: dict

const makeBackronym = function(string){
    return [...string].map(l => dict[l.toUpperCase()]).join(' ');
  };