Object.prototype.hash = function(string) {
    let props = string.split('.'),
        currentPos = this;
    for (let i = 0; i < props.length; i++){
      if (currentPos && currentPos[props[i]] !== undefined) currentPos = currentPos[props[i]];
      else return undefined;
    }
    return currentPos;
  }