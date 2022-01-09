function divisors(integer) {
    let divs = [];
    for (let i = 2; i <= Math.floor(integer / 2); i++)
      if (!(integer % i)) divs.push(i);
    return divs.length ? divs : `${integer} is prime`;
  }