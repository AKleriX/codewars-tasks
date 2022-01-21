function hist(s) {
    let errors = s.replace(/[^uwxz]/g,'').split('').sort().join('').match(/(.)\1*/g) || [];
    return errors.map(e => `${e[0]}  ${e.length + ' '.repeat(6 - e.length.toString().length) + '*'.repeat(e.length)}`).join('\r');
  }