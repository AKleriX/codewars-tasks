function createFunctions(n) {
    let callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }