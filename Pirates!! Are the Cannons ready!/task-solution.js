const cannonsReady = (gunners) => {
    for (let name in gunners)
      if (gunners[name] === 'nay') return 'Shiver me timbers!';
    return 'Fire!';
  }