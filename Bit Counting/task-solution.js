var countBits = function(n) {
    return n > 0 ? n.toString(2).match(/1/g).length : 0;
};