const Vector = function (components) {
    this.vector = [...components];
  };
  
  Vector.prototype.toString = function(){
    return '(' + this.vector.join(',') + ')';
  }
  
  Vector.prototype.add = function(v){
    if (v.vector.length !== this.vector.length) throw 'SizeVectorError';
    return new Vector(this.vector.map((n, i) => n + v.vector[i]));
  } 
  
  Vector.prototype.subtract = function(v){
    if (v.vector.length !== this.vector.length) throw 'SizeVectorError';
    return new Vector(this.vector.map((n, i) => n - v.vector[i]));
  } 
  
  Vector.prototype.dot = function(v){
    if (v.vector.length !== this.vector.length) throw 'SizeVectorError';
    return this.vector.reduce((sum, n, i) => sum + n * v.vector[i], 0);
  } 
  
  Vector.prototype.norm = function(){  
    return Math.sqrt(this.vector.reduce((sum, n) => sum + n**2, 0));
  } 
  
  Vector.prototype.equals = function(v){  
    return this.toString() === v.toString();
  } 