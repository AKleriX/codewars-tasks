function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(n + ' is invalid');
    return Number(n) === 0 ? [] : arrayFill(Number(n), v);
}

function arrayFill(n, v){
    if (n === 1) return [v];
    return [v].concat(arrayFill(n - 1, v));
}