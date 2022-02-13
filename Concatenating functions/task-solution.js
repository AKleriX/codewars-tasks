// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

Function.prototype.pipe = function(func) {
  return (function(arg){
    return func(this(arg));
  }).bind(this);
};