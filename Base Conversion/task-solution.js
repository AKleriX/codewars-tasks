function convert(input, source, target) {
    let baseIn = source.length,
        baseOut = target.length,
        acc = 0,
        result = '';
    for (let i = 0; i < input.length; i++)
        acc = (acc * baseIn) + source.indexOf(input[i]);

    while (acc !== 0 ){
        let symbol = target[acc % baseOut];
        acc = Math.trunc(acc / baseOut);
        result = symbol + result;
    }
    return result ? result : target[0];
}