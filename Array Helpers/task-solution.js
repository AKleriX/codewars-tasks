Array.prototype.square = function () {
    return this.map(num => Math.pow(num, 2));
}

Array.prototype.cube = function () {
    return this.map(num => Math.pow(num, 3));
}

Array.prototype.sum = function () {
    return this.reduce((sum, num) => sum + num, 0);
}

Array.prototype.average = function () {
    return this.length > 0 ? this.sum() / this.length : NaN;
}

Array.prototype.even = function () {
    return this.filter(num => !(num % 2));
}

Array.prototype.odd = function () {
    return this.filter(num => num % 2);
}