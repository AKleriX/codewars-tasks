const solve = (stones) => stones.length - stones.replace(/(.)\1+/g, '$1').length;
