deadAntCount = function(ants) {
    let diedAnts = ants ? ants.replace(/(ant)|([^a-z])/g, '').split('')
                              .sort().join('').match(/(.)\1*/g) : 0;
    return diedAnts ? diedAnts.reduce((maxCount, bits) => bits.length > maxCount ? bits.length : maxCount, 0) : 0;
  }