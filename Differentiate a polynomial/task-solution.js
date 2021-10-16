function differenatiate(str, x) {
    let terms = str.split(/[+|\-]/),
        result = 0,
        indexTerm = 0,
        sign;



    terms.forEach((term) => {
        if (term.indexOf('x') === -1 || term === '') return 0;
        [sign, indexTerm] = defSignAndIndex(str, term, indexTerm);
        if (term.indexOf('^') === -1){
            result += Number(term.slice(0, term.indexOf('x'))) === 0 ? sign : (Number(term.slice(0, term.indexOf('x'))) * sign);
            console.log(Number(term.slice(0, term.indexOf('x'))) === 0 ? sign : (Number(term.slice(0, term.indexOf('x'))) * sign));
            return Number(term.slice(0, term.indexOf('x'))) === 0 ? sign : (Number(term.slice(0, term.indexOf('x'))) * sign);
        }
        let pow = Number(term.slice(term.indexOf('^') + 1)),
            coef = Number(term.slice(0, term.indexOf('x'))) === 0 ? 1 : Number(term.slice(0, term.indexOf('x')));
        result += sign * coef * pow * Math.pow(x, pow - 1);
        console.log(sign * coef * pow * Math.pow(x, pow - 1));
        return sign * coef * pow * Math.pow(x, pow - 1);
    });


    return result;
}

function defSignAndIndex(str, term, indexTerm) {
    let sign = 1;
    if (str.indexOf(term, indexTerm) > 0) {
        sign = str[str.indexOf(term, indexTerm) - 1] === '+' ? 1 : -1;
    }
    return [sign, (str.indexOf(term) + term.length)];
}

console.log(differenatiate("x^2+x", 3));