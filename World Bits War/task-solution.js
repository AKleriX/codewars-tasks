function bitsWar(numbers) {
    let oddsPower = 0,
        evensPower = 0;
    numbers.forEach(n => {
      let power = [...n.toString(2)].filter(d => d === '1').length;
      if (n % 2)
        oddsPower += n > 0 ? power : -power;
      else evensPower += n >= 0 ? power : -power;
    });
    return oddsPower === evensPower ? 'tie' : (oddsPower > evensPower ? 'odds win' : 'evens win');
  }