function generator(sequencer) {
    let args = [];

    for (let i = 1; i < arguments.length; i++)
        args.push(arguments[i]);

    return {
        next: sequencer(...args)
    }
}

function dummySeq() {
    return function() {
        return "dummy";
    };
}

function factorialSeq() {
    let iter = 0,
        f = [];
    return function() {
        if (f.length === 0) {
            f.push(1);
            iter++;
            return(f[0]);
        }
        f.push(f[f.length - 1] * f.length);
        iter++;
        return(f[f.length - 1]);
    };
}

function fibonacciSeq() {
    let iter = 0,
        f = [];

    return function() {
        if (f.length === 0 || f.length === 1) {
            f.push(1);
            iter++;
            return(f[0]);
        }
        f.push(f[f.length - 2] + f[f.length - 1]);
        iter++;
        return(f[f.length - 1]);
    };
}

function rangeSeq(start, step) {
    let iter = 0,
        seq = [0];

    return function() {
        iter++;
        if (seq.length === 1) {
            seq.push(seq[0] + start);
            return seq[1];
        }
        seq.push(seq[seq.length - 1] + step);
        return seq[seq.length - 1];
    };
}

function primeSeq() {
    let iter = 0,
        primes = [];

    return function() {
        iter++;

        if (primes.length === 0) {
            primes.push(2);
            return primes[0];
        }
        for (let i  = primes[primes.length - 1] + 1;;i++){
            let del = 0;
            for (let j  = 0; j <  primes.length;j++)
                if (i % primes[j] === 0) del++;
            if (del === 0){
                primes.push(i);
                return primes[primes.length - 1];
            }
        }
    };
}

function partialSumSeq() {
    let iter = 0,
        sum = 0,
        arg = [...arguments];

    return function() {
        if (arg[iter] === undefined) throw Error('End of sequence error expected');
        sum += arg[iter];
        iter++;
        return sum;
    };
}