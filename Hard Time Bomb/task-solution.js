var wireCode = () => this[Object.keys(this).find(key => /^boom/.test(key))];
// Find the wire.
Bomb.CutTheWire(wireCode());