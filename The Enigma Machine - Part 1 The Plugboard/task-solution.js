Plugboard=function(wires = ''){
    if (wires.length % 2 || wires.length / 2 > 10) throw 'Error pairs';
    this.pairs = {};
    for (let i = 0; i < wires.length; i += 2)
      if (!this.pairs.hasOwnProperty(wires[i]) && !this.pairs.hasOwnProperty(wires[i + 1])) {
        this.pairs[wires[i]] = wires[i + 1];
        this.pairs[wires[i + 1]] = wires[i];
      }
      else throw 'Connect error!';
    
    this.process = function (wire){
      if (!this.pairs.hasOwnProperty(wire)) return wire;
      return this.pairs[wire];
    }
  }