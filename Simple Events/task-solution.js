function Event() {
    this.handlers = [];
    this.subscribe = function(func) {this.handlers.push(func)};
    this.unsubscribe = function(func) {this.handlers = this.handlers.filter(f => f !== func)};
    this.emit = function(...args) {this.handlers.forEach(f => f(...args))};
  }