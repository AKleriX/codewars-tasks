const snakesOn = (aPlane) => new Set(aPlane.map((r) => r.join('').replace(/_/g, '')).join('')).size;
