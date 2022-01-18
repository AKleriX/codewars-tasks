function catMouse(x, j){
    let dogPos = x.indexOf('D'),
        catPos = x.indexOf('C'),
        mousePos = x.indexOf('m');
    if (dogPos === -1 || catPos === -1 || mousePos === -1) return 'boring without all three';
    else if (Math.abs(catPos - mousePos) > j) return 'Escaped!';
    return dogPos > Math.min(catPos, mousePos) && dogPos < Math.max(catPos, mousePos) ? 'Protected!' : 'Caught!';
  }