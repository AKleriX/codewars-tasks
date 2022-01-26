function dist(v, mu, g = 9.81) {              
    v /= 3.6;
    return (v**2 / (2 * mu * g)) + v;
  }
  
  function speed(d, mu, g = 9.81) {
    return 3.6 * (-mu * g + Math.sqrt(mu * g * (mu * g + 2 * d)));
  }