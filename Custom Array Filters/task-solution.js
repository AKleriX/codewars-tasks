Array.prototype.even = function(){
  return this.filter(symbol => parseInt(symbol) === symbol && !(symbol % 2));
}

Array.prototype.odd = function(){
  return this.filter(symbol => parseInt(symbol) === symbol && symbol % 2);
}

Array.prototype.under = function(x){
  return this.filter(symbol => parseInt(symbol) === symbol && symbol < x);
}

Array.prototype.over = function(x){
  return this.filter(symbol => parseInt(symbol) === symbol && symbol > x);
}

Array.prototype.inRange = function(min,max){
  return this.filter(symbol => parseInt(symbol) === symbol && symbol >= min && symbol <= max);
}